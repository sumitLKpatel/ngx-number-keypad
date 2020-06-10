# Angular Number Keypad

This is a two in one features keypad, you can use this as calculator also by just enabling that feature. 

## Get started

npm i ngx-number-keypad --save

## Techniques

import in your app.module.ts file
```
...
import { KeypadModule } from 'ngx-numaric-keypad';
...

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    KeypadModule,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
then put below component in your view

```

  <ngx-numaric-keypad 
    [calc]="true"
    (getVal)="yourFunctionName($event)"
  >
  </ngx-numaric-keypad>

```

Now create function in your component.ts file
```
  yourFunctionName(numberOutput: number) {
    console.log(test) // you will have your keypad output here
  }

```
![Keypad Image](https://github.com/sumitLKpatel/ngx-number-keypad/blob/master/projects/keypad/src/Screenshot_3.png?raw=true)


## Variable Usage

|    params    |   value  |             default value            |   description    |
|:------------:|:--------:|:------------------------------------:|:----------------:|
|    calc       |  boolean |               false                  | Enable Calculator       |



## License

MIT © [Sumit Patel](https://github.com/sumitLKpatel)