import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-numaric-keypad',
  template: `<div class='keypad-container'>
  <div class="keypad">
    <div class="keypad-screen">
      <input type="text"  [value]="currentNumber" disabled />
    </div>
  
    <div class="keypad-keys">
      <div class="keypad-btns">
        <button type="button" (click)="getNumber('7')" value="7">7</button>
        <button type="button" (click)="getNumber('8')" value="8">8</button>
        <button type="button" (click)="getNumber('9')" value="9">9</button>
    
        <button type="button" (click)="getNumber('4')" value="4">4</button>
        <button type="button" (click)="getNumber('5')" value="5">5</button>
        <button type="button" (click)="getNumber('6')" value="6">6</button>
    
        <button type="button" (click)="getNumber('1')" value="1">1</button>
        <button type="button" (click)="getNumber('2')" value="2">2</button>
        <button type="button" (click)="getNumber('3')" value="3">3</button>
    
    
        <button type="button" (click)="getDecimal()" class="decimal" value=".">
          .
        </button>
        <button type="button" (click)="getNumber('0')" value="0">0</button>
        <button type="button" (click)="backSpace()" class="decimal back-btn" value=".">
          <i class="fas fa-backspace"></i> 
        </button>
      </div>
      <div class="op-btn" *ngIf="calc">
  
        <button type="button" (click)="clear()" class="all-clear" value="all-clear">
          AC
        </button>
        <button type="button" (click)="getOperation('%')" class="operator" value="%">
          %
        </button>
        <button type="button" (click)="getOperation('+')" class="operator" value="+">
          +
        </button>
        <button type="button" (click)="getOperation('-')" class="operator" value="-">
          -
        </button>
        <button type="button" (click)="getOperation('*')" class="operator" value="*">
          &times;
        </button>
        <button type="button" (click)="getOperation('/')" class="operator" value="/">
          &divide;
        </button>
  
        <button type="button" (click)="getOperation('=')" class="equal-sign" value="=">
          =
        </button>
      </div>
    </div>
  </div>
</div>
`,
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
