import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
import { LoginService } from '../services/login.service';
import { AuthenticationGuard } from './AuthenticationGuard.component';
import { CheckLoginGuard } from './check-login.component';

@Injectable()
export class CombieGuard implements CanActivate {
  canActivatexxx?: any[];

  constructor(private checkLoginGuard: CheckLoginGuard,
    private authenticationGuard: AuthenticationGuard) {
      this.canActivatexxx=[true || false];
  }

  canActivate(): boolean {
    let statusCheckLoginGuard = this.checkLoginGuard.canActivate();
    let statusAuthenticationGuard = this.authenticationGuard.canActivate(); 
    return statusAuthenticationGuard || statusCheckLoginGuard;
  }

  




}
