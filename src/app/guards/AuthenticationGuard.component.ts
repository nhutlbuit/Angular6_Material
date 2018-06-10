import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, Router } from '@angular/router'
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {

  }

  canActivate(): boolean {
    if(this.loginService.getStatus()) return true
    this.router.navigate(['/login']);
    }




}
