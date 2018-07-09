import { Component, OnInit, OnChanges, SimpleChanges, HostListener, Renderer2 } from '@angular/core';
import { LoginService } from '../services/login.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { delay } from 'q';
import { windowCount } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLoggedIn: boolean;
  count = 0;
  countRef: number;

  constructor(private loginService: LoginService, private router: Router){ 
  }

  Logout() {
    this.loginService.SetLogin(false);
    alert("Logged out");
   // this.router.navigate(['/']);
  }

  ngOnInit() {
    this.isLoggedIn = this.loginService.IsLogged();
    if (this.isLoggedIn == null) {
      this.isLoggedIn = false;
    }
    this.routingEvent();
  }

  @HostListener('mousemove', ['$event']) onmousemove() {
    let countx = 0; 
    setInterval(function(){ 
      if(this.countRef++ > 15) console.log("timeout!")
      console.log("countx"+this.countRef);
    }, 6000);
  }


  routingEvent(){

    let count = this.count; 
    this.countRef = count;
    setInterval(function(){ 
      if(count++ > 15) console.log("timeout!")
      console.log(count);
    }, 6000);

     this.router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        count = 0;
        console.log("isChanged!");
      }
    });
  }

  CheckStatusLogin() {
   /// alert(this.isLoggedIn);
    this.isLoggedIn = this.loginService.IsLogged();
    return this.isLoggedIn;
  }

}