import { Component, OnInit, Injectable } from '@angular/core';
import { Response, HttpModule } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../model/employeeCustom';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserDatabase } from '../model/employeeDatabase';


@Injectable()
export class EmployeeService {
    private employeeApiUrl: string = "https://5aea8aeb531a580014142894.mockapi.io/api/employees/";
    //user: User = new User();

    constructor(private _http: HttpClient) {

    }

    /*   
       GetListEmployee1(): Observable<any[]> {
   
           return this._http.get(this.employeeApiUrl).map((response: Response) => {
   
               return response.json();
           }, error => {
               console.error("error log for GetListEmployee function:" + error);
           });
           
       }
   */

    GetListEmployee(): Observable<any[]> {
        return this._http.get<any[]>(this.employeeApiUrl);

    }

    /*
        GetEmployeeDetail(id: number): Observable<User> {
            return this._http.get(this.employeeApiUrl + id).map((response: Response) => {
                this.user.username = response.json().name;
                this.user.Id = response.json().id;
                this.user.Age = response.json().age;
                this.user.Date = response.json().created;
                this.user.Status = response.json().status;
                return this.user;
            }, error => {
                console.error("error log for GetEmployeeDetail function:" + error);
            });
        }
    */

    GetEmployeeDetail(id: number): Observable<any> {
        return this._http.get<any>(this.employeeApiUrl + id);
    }

    /*
        UpdateEmployee(id: number, user: any): Observable<any> {
            return this._http.put(this.employeeApiUrl + id, user).map((response: Response) => {
                return response.json();
            }, error => {
                console.error("error log for UpdateEmployee function:" + error);
            });
        }
    */

    UpdateEmployee(id: number, user: any): Observable<any> {
        return this._http.put<any>(this.employeeApiUrl + id, user);
    }

    /*
        AddEmployee(data: any): Observable<any> {
            return this._http.post(this.employeeApiUrl, data).map((response: Response) => {
                return response.json();
            }, error => {
                console.error("error log for AddEmployee function:" + error);
            });
        }
    */
    AddEmployee(data: any): Observable<any> {
        return this._http.post<any>(this.employeeApiUrl, data);
    }

    /*   
        DeleteEmployee(id: number): Observable<any> {
            return this._http.delete(this.employeeApiUrl + id).map((response: Response) => {
                return response.json();
            }, error => {
                console.error("error log for DeleteEmployee function:" + error);
            });
        }
    */
    DeleteEmployee(id: number): Observable<any> {
        return this._http.delete<any>(this.employeeApiUrl + id);
    }

    /*
        SearchEmployee(keyword: string): Observable<any> {
            return this._http.get(this.employeeApiUrl + "?search=" + keyword).map((response: Response) => {
                console.info("SearchEmployee: " + response.json());
                return response.json();
    
            }, error => {
                console.error("error log for SearchEmployee function:" + error);
            });
        }
    */

    SearchEmployee(keyword: string): Observable<any> {
        return this._http.get<any>(this.employeeApiUrl + "?search=" + keyword);
    }


}