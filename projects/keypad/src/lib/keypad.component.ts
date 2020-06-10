import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'ngx-numaric-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  @Input() sum = false;
  @Input() sub = false;
  @Input() multiplication = false;
  @Input() division = false;
  @Input() clean = false;

  // @Output() greetEvent = new EventEmitter();
  currentNumber = '0';
  firstOperand: any = null;
  operator: any = null;
  waitForSecondNumber = false;
  equalSign = false;

  constructor() {

  }

  ngOnInit(): void {
    if (this.sum === true || this.sub === true || this.multiplication === true || this.division === true) {
      this.equalSign = true;
    }
  }

  public getNumber(v: string) {
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0'
        ? (this.currentNumber = v)
        : (this.currentNumber += v);
    }
    // this.greetEvent.emit(this.currentNumber);
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op: any, secondOp: any) {
    switch (op) {
      case '+':
        return (this.firstOperand += secondOp);
      case '-':
        return (this.firstOperand -= secondOp);
      case '*':
        return (this.firstOperand *= secondOp);
      case '/':
        return (this.firstOperand /= secondOp);
      case '=':
        return secondOp;
    }
  }
  public getOperation(op: string) {
    console.log(op);

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(
        this.operator,
        Number(this.currentNumber)
      );
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
  }

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }


}
