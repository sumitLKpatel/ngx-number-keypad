import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-numaric-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  @Input() calc = false;

  @Output() getVal = new EventEmitter();
  currentNumber = '0';
  firstOperand: any = null;
  operator: any = null;
  waitForSecondNumber = false;
  equalSign = false;

  constructor() {

  }

  ngOnInit(): void {

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
    this.getVal.emit(this.currentNumber);
  }

  public backSpace() {
    if (this.currentNumber.length > 0) {
      this.currentNumber = this.currentNumber.slice(0, -1);
      this.getVal.emit(this.currentNumber);
    }
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
      case '%':
        return ((this.firstOperand / 100) * secondOp);
      case '=':
        return secondOp;
    }
  }
  public getOperation(op: string) {
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
    this.getVal.emit(this.firstOperand);
  }

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
    this.getVal.emit(this.currentNumber);
  }


}
