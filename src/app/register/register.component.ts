import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms'
import { Roles } from '../model/roles';
import { User } from '../model/employeeCustom';
import { CheckLoginGuard } from '../guards/check-login.component';

@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {

  public user: any;
  public registerForm: FormGroup;
  roles: Roles[];
  public hide: boolean;
  arrayA: any;

  constructor(private router: Router,
    private userService: UserService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private checkLoginGuard: CheckLoginGuard) {
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

  onClick(): any {
    this.userService.GetJson().subscribe((data: any) => {
      window.sessionStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("user", JSON.stringify(data));
      data.roles.map(val => {
        if (val.dsRole != undefined) {
          console.log("dsRole: " + val.dsRole);
        }
        if (val.asRole != undefined) {
          console.log("asRole: " + val.asRole);
        }
        if (val.adminRole != undefined) {
          console.log("adminRole: " + val.adminRole);
        }
        if (val.agisRole != undefined) {
          console.log("agisRole: " + val.agisRole);
        }
        if (val.array != undefined) {

          // put val.array to array object in FE
          this.roles = val.array;
          console.log("array: " + val.array);
          this.roles.forEach(element => {
            console.log("array: " + JSON.stringify(element));
            console.log("element.dsRole: " + element["dsRole"]);
          });

          // put val.array to array 
          const map = val.array.map(x => x);
          console.log("map: " + JSON.stringify(map));
          map.forEach(element => {
            console.log("array map: " + JSON.stringify(element));
            console.log("element.dsRole map:  " + element["dsRole"]);
          });


          val.array.map(val => {
            if (val.dsRole != undefined) {
              console.log("dsRole: " + val.dsRole);
            }
            if (val.asRole != undefined) {
              console.log("asRole: " + val.asRole);
            }
            if (val.adminRole != undefined) {
              console.log("adminRole: " + val.adminRole);
            }
            if (val.agisRole != undefined) {
              console.log("agisRole: " + val.agisRole);
            }
          })

        }
      })
      return data;
    });
  }


  retriveuser() {
    let session: any = JSON.parse(window.sessionStorage.getItem("user"));
    let local: any = JSON.parse(window.sessionStorage.getItem("user"));
    console.log("session" + JSON.stringify(session));
    console.log("local" + JSON.stringify(local));

    session.roles.map(val => {
      if (val.dsRole != undefined) {
        console.log("dsRole: " + val.dsRole);
      }
      if (val.asRole != undefined) {
        console.log("asRole: " + val.asRole);
      }
      if (val.adminRole != undefined) {
        console.log("adminRole: " + val.adminRole);
      }
      if (val.agisRole != undefined) {
        console.log("agisRole: " + val.agisRole);
      }
    });

  //  console.log("CheckLoginGuard" + this.checkLoginGuard.canActivate());

  }

  private setUserIntoStorage(model: User): void {
    window.sessionStorage.setItem('user', JSON.stringify(model));
  }

  private getUserFromStorage(): User | null {
    const userStr: string = window.sessionStorage.getItem('user');
    return JSON.parse(userStr, null);
  }

  private removeUserFromStorage(): void {
    window.sessionStorage.removeItem('user');

  }

  filter() {

    this.arrayA = [{'a': 'a'}, {'a': 'b'}, {'a': 'c'}];

     this.arrayA.filter(element => element.a !== 'a').map( ele => {ele.a = 'a' + ele.a;});

    // arrayA.reduce((res, cur) => {
    //   if (cur.a !== 'a') {
    //     res.push({['a']: cur.a + 'a'});
    //   }
    //   return res;
    // }, []).map( ele => {
    //   ele.a = 'a' + ele.a;
    // });

    // const arrayB = arrayA.filter(element => element.a !== 'a');
    // arrayB.map( ele => {
    //   ele.a = 'a' + ele.a;
    // });
    // arrayA = arrayB;
    console.log(JSON.stringify(this.arrayA ));
  }


}
