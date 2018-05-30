import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'register-validate-root',
  templateUrl: './register-validate.component.html',
  styleUrls: ['./register-validate.component.css'],
  providers: [UserService]
})

export class RegisterValidateComponent implements OnInit {

  public user: any;
  public registerForm: FormGroup;

  constructor(private router: Router,
    private userService: UserService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.user = {};
    this.validateForm();
  }

  validateForm() {
    this.registerForm = this.formBuilder.group({
      //this.formBuilder.control
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      // []
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],
      //new FormControl
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
    }, {
        validator: this.passwordConfirming
      });
  }

  passwordConfirming(abstractControl: AbstractControl):any {
    let pass = abstractControl.get('password').value;
    let passConfirm = abstractControl.get('passwordConfirm').value;
    if (pass !== passConfirm) {
      return { 'mismatch': true };
    }
    return null;
  }

  SaveUserInfo(formvalue: any) {
    alert(JSON.stringify(formvalue));
   // this.registerForm.reset();
  }


}
