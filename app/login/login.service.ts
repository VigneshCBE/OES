import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ILogin } from './../interface/loginInterface';

@Injectable()
export class LoginService {
    private _loginServiceUrl = "http://localhost:3000/users";

    constructor(private _http: Http, private _route: Router) {

    }

    loginAdmin(username: string, password: string): Observable<ILogin> {
        return this._http.get(this._loginServiceUrl)
            .map((response: Response) => <ILogin>response.json())
            .do(data => {
                let users: ILogin = data;
                //let Pwd = CryptoJS.AES.encrypt(password,"longlivetamil");
                
                //  let encryptPwd = CryptoJS.AES.encrypt(password,"longlivetamil"); //from UI
                 let decryptPwd = CryptoJS.AES.decrypt(users[0].password, "longlivetamil") // from service call
                 let pwd = decryptPwd.toString();
                 console.log("Epwd  " + decryptPwd + " Dpwd " );
                if (username == users[0].username) {
                    if (password == decryptPwd) {
                        localStorage.setItem("currentUser" , users[0].username);
                        this._route.navigateByUrl('/admin');
                    }
                    else {
                        alert("Password you have typed is wrong");
                    }
                } else {
                    alert("Userid does not exist");
                }

            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error);
    }
}