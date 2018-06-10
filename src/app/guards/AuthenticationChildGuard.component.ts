import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, Router, CanActivateChild } from '@angular/router'
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationChildGuard implements CanActivateChild {

  constructor(private loginService: LoginService, private router: Router) {

  }

  canActivateChild(): boolean {
    if(this.loginService.getStatus()) return true
    this.router.navigate(['/login']);
    }




}
