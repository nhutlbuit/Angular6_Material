import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms'

@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {

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

  SaveUserInfo() {
    this.userService.AddUser(this.registerForm.value).subscribe(response => {
      if (response) {
        alert("Register Successfully!");
        this.loginService.SetLogin(true);
        this.router.navigate(['employee']);
      }
    });
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
        Validators.maxLength(20),
        Validators.pattern("[a-zA-Z0-9].{5,20}$")
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

  passwordConfirming(abstractControl: AbstractControl) {

    if (abstractControl.get('passwordConfirm').touched || abstractControl.get('passwordConfirm').dirty) {
      let pass = abstractControl.get('password').value;
      let passConfirm = abstractControl.get('passwordConfirm').value;
      if (pass !== passConfirm) {
        abstractControl.get('passwordConfirm').setErrors({ mismatch: true })
      }
      return null;
    }
  }


}
