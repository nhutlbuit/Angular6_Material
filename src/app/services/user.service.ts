import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class UserService {
    private loginApiUrl: string = "http://5aea8aeb531a580014142894.mockapi.io/api/login/";
    private jsontest: string = "https://api.myjson.com/bins/xntb6";

    constructor(private _http: HttpClient) {

    }

    GetJson(): Observable<any> {
        return this._http.get<any>(this.jsontest);
    }

/*
    GetListUser(): Observable<any[]> {
        return this._http.get(this.loginApiUrl).map((response: Response) => {
            return response.json();
        }, error => {
            console.error("error log for GetListUser function:" + error);
        });
    }
*/
    
    GetListUser(): Observable<any[]> {
        return this._http.get<any>(this.loginApiUrl);
    }

/*
    UpdateUser(id: number, user: any): Observable<any> {
        return this._http.put(this.loginApiUrl + id, user).map((response: Response) => {
            return response.json();
        }, error => {
            console.error("error log for UpdateUser function:" + error);
        });
    }
*/

    UpdateUser(id: number, user: any): Observable<any> {
        return this._http.put<any>(this.loginApiUrl+ id, user);
    }

    /*
        AddUser(data: any): Observable<any> {
            return this._http.post(this.loginApiUrl, data).map((response: Response) => {
                return response.json();
            }, error => {
                console.error("error log for AddUser function:" + error);
            });
        }
    */

    AddUser(data: any): Observable<any> {
        return this._http.post<any>(this.loginApiUrl, data);
    }

    /*
        DeleteUser(id: number): Observable<any> {
            return this._http.delete(this.loginApiUrl + id).map((response: Response) => {
                return response.json();
            }, error => {
                console.error("error log for DeleteUser function:" + error);
            });
        }
    */

    DeleteUser(id: number): Observable<any> {
        return this._http.delete<any>(this.loginApiUrl + id);
    }
}