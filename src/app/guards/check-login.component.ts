import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { LoginService } from '../services/login.service';

@Injectable()
export class CheckLoginGuard implements CanActivate {

  constructor(private loginService: LoginService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let status: boolean = this.loginService.IsLogged();
    console.log("route: "+route);
    console.log("state: "+state);
    return status;
  }




}
