import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {

  public user: any;

  constructor(private router: Router,
    private userService: UserService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = {};
  }

  SaveUserInfo() {
    this.userService.AddUser(this.user).subscribe(response => {
      if (response) {
        alert("Register Successfully!");
        this.loginService.SetLogin(true);
        this.router.navigate(['employee']);
      }
    });
  }

  Clickme(){
    console.log("click me!");
  }



}
