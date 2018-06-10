import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class LoginService {
    public _isLoggedIn: boolean;
    constructor(private _http: Http) {

    }

    IsLogged(): boolean {
        return this._isLoggedIn;
    }

    SetLogin(isLoggedIn: boolean) {
        return this._isLoggedIn = isLoggedIn;
    }

    getStatus():boolean{
        window.sessionStorage.getItem("user");
        return false;
    }


}