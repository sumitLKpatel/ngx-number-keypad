import { Component, OnInit } from '@angular/core';
import { KeypadComponent } from '../../../keypad/src/lib/keypad.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ngx-test-keypad';


  ngOnInit(): void {

  }

  getNumberData(numberD: any) {
    console.log(numberD, "number")

  }

}
