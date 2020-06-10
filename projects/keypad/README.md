# Angular Number Keypad

This is a two in one features keypad, you can use this as calculator also by just enabling that feature. 

## Get started

npm i ngx-number-keypad --save

## Techniques
```

  <ngx-numaric-keypad 
    [calc]="true"
    (getVal)="yourFunctionName($event)"
  >
  </ngx-numaric-keypad>

```

![Numaric Keypad](src\Screenshot_3.png "Numaric Keypad")

By adding this calc param, you will have calculator functionality...

## Variable Usage

|    params    |   value  |             default value            |   description    |
|:------------:|:--------:|:------------------------------------:|:----------------:|
|    calc       |  boolean |               false                  | Enable Calculator       |



## License

MIT © [Sumit Patel](https://github.com/sumitLKpatel)