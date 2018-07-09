import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { LoginService } from '../services/login.service';

@Injectable()
export class CheckLoginGuard implements CanActivate {

  constructor(private loginService: LoginService) {

  }

  canActivate(): boolean {
    return false;
    /* if(this.loginService.getStatus()) return true
    this.router.navigate(['/login']); */
    }




}
