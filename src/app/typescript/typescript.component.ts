import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'typescript-root',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypeScriptComponent implements AfterViewInit, OnInit {
  public title = 'app';
  public showlineIf = true;
  public color = "red";
  public colors: string[] = ["red", "blue", "green"];
  public cOne = false;
  public cTwo = true;
  public testtimeout = "init data";
  msgs = [];
  @ViewChild('name') username: ElementRef;

  @Input() name: string;

  toggle() {
    this.cOne = !this.cOne;
    this.cTwo = !this.cTwo
  }

  onClick() {
    console.log("clicked");
  }

  onChange(event) {
    console.log(event);
    console.log(event.target.value);
    this.msgs.push(event.target.value);
    // alert("using viewChild:"+this.username.nativeElement.value);
  }

  onChangePass(event) {
    //  alert("password is:"+event.target.value);
  }

  ngAfterViewInit() {
    // this.username.nativeElement.focus();
    this.promiseFunction();
    //this.setfuntion();
    // this.mapfunction();

  }
  ngOnInit() {
    this.delay3seconds();

  }

  delay3seconds():string {
    setTimeout(() => {
      this.testtimeout = "dada";
      console.log(this.testtimeout);
    }, 3000);
    return this.testtimeout;
  }

  promiseFunction() {
    let promise = new Promise(function (resolve, reject) {
      resolve();
      reject();
    });

    promise.then(
      function (success) {
        console.log("success");
      },
      function (error) {
        console.log("error");
      }
    );

    /*
    promise.then(function () {
      console.log(1);
    })
      .then(function () {
        console.log(2);
      })
      .then(function () {
        console.log(3);
      });
*/
    console.log("promise" + JSON.stringify(promise) + promise);
  }

  restTemplate() {
    // Khai báo hàm
    let domainList = (main, sub, ...other) => {
      console.log("Main: " + main);
      console.log("Sub: " + sub);
      console.log("Other");
      console.log(other);
    }
    // Gọi hàm
    domainList('freetuts.net', 'facebook.com', 'google.com', 'zalo.com', 'iphone.com');
  }

  mapfunction() {
    let map = new Map().set('a', 1).set('b', 2);
    console.log('***** Sử dụng next *****');
    let iterable = map[Symbol.iterator]();
    console.log(iterable.next());
  }

  setfuntion() {
    console.log('Liệt kê');
    let set = new Set().add('a').add('b');
    console.log(set);

    console.log('Bổ sung');
    let new_set = new Set(set).add('c').add('d');
    console.log(new_set);
  }





}
