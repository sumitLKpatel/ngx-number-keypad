import { NgModule } from '@angular/core';
import { KeypadComponent } from './keypad.component';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [KeypadComponent],
  imports: [
    CommonModule
  ],
  exports: [KeypadComponent]
})
export class KeypadModule { }
