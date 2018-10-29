import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms'

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
  private username: string;
  public user: any;
  public loginForm: FormGroup;
  public hide: boolean;

  constructor(private router: Router,
    private userService: UserService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.userDatabase = this.LoadDataUser();
    //this.SavePassword();
  }

  ngOnInit() {
    this.userDatabase = {};
    this.isCheckLogin = false;
    this.user = {};
    this.validateForm();
  }

  validateForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]],
      // []
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern("[a-zA-Z0-9].{5,20}$")
      ]],
    }, {
      });
  }

  CheckLogin(value: any) {
    for (let result of this.userDatabase) {
      if (this.loginForm.value.email == result.email && this.loginForm.value.password == result.password) {
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
