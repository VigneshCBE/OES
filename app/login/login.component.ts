import { Component, Renderer, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from './login.service';
import { ILogin } from './../interface/loginInterface';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent {

    public users : ILogin;

    model : any = {};

    constructor(private _loginService : LoginService) {
        localStorage.removeItem("currentUser");
    }


    ngOnInit() : void {

    }


    openForm1(): void {
        document.getElementById('mainButton1').className = 'active'
    }
    openForm2(): void {
        document.getElementById('mainButton2').className = 'active'
    }

    closeForm1(): void {
        document.getElementById('mainButton1').className = ''
    }
    closeForm2(): void {
        document.getElementById('mainButton2').className = ''
    }

    loginAdmin(): void {
        this._loginService.loginAdmin(this.model.username,this.model.password)
                         .subscribe();
    }

    checkInput1(value: any): void {
        if (value.target.value.length > 0) {
            if (value.target.id == 'name') {
                document.getElementById('name').className = 'active'
            }
            if (value.target.id == 'password') {
                document.getElementById('password').className = 'active'
            }
        } else {
            if (value.target.id == 'name') {
                document.getElementById('name').className = ''
            }
            if (value.target.id == 'password') {
                document.getElementById('password').className = ''
            }
        }
    }
    checkInput2(value: any): void {
        if (value.target.value.length > 0) {
            if (value.target.id == 'name') {
                document.getElementById('name').className = 'active'
            }
            if (value.target.id == 'password') {
                document.getElementById('password').className = 'active'
            }
        } else {
            if (value.target.id == 'name') {
                document.getElementById('name').className = ''
            }
            if (value.target.id == 'password') {
                document.getElementById('password').className = ''
            }
        }
    }
}
