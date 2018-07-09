import { CheckLoginGuard } from "./check-login.component";
import { AuthenticationGuard } from "./AuthenticationGuard.component";
import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class OrGuard implements CanActivate {
    guards: any[];
    isGuard: boolean;

    constructor() {
        alert(this.guards);
        //this.isGuard = this.guards.some(Boolean);
        
    }

    canActivate(...guards): boolean {
        return this.isGuard;
    }

}
