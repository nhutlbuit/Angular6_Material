import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
import { LoginService } from '../services/login.service';
import { AuthenticationGuard } from './AuthenticationGuard.component';
import { CheckLoginGuard } from './check-login.component';

@Injectable()
export class Test {
  canActivatexxx?: any[];

  constructor() {
    this.canActivatexxx = [true || false];
  }

  xxxx(): boolean {
    return true;
  }






}
