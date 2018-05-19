import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {

  private userDatabase: any;
  private password: string;
  private email: string;
  private isCheckLogin: boolean;
  private username:string;
  public user: any;

  constructor(private router: Router,
    private userService: UserService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute) {
    this.userDatabase = this.LoadDataUser();
    //this.SavePassword();
  }

  ngOnInit() {
    this.userDatabase = {};
    this.isCheckLogin = false;
    this.user = {};
  }

  CheckLogin(value: any) {
    for (let result of this.userDatabase) {
      if (value.userName == result.email && value.password == result.password) {
        this.loginService.SetLogin(true);
        this.isCheckLogin = true;
        this.router.navigate(['/']);
      }
    }

    if (!this.isCheckLogin) {
      alert("Email or password is not correctly");
    }
  }

  LoadDataUser(): any {
    this.userService.GetListUser().subscribe((data: any) => {
      this.userService = data;
      this.userDatabase = data;
      return data;
    });
  }

}
