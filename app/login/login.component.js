"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var LoginComponent = (function () {
    function LoginComponent(_loginService) {
        this._loginService = _loginService;
        this.model = {};
        localStorage.removeItem("currentUser");
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.openForm1 = function () {
        document.getElementById('mainButton1').className = 'active';
    };
    LoginComponent.prototype.openForm2 = function () {
        document.getElementById('mainButton2').className = 'active';
    };
    LoginComponent.prototype.closeForm1 = function () {
        document.getElementById('mainButton1').className = '';
    };
    LoginComponent.prototype.closeForm2 = function () {
        document.getElementById('mainButton2').className = '';
    };
    LoginComponent.prototype.loginAdmin = function () {
        this._loginService.loginAdmin(this.model.username, this.model.password)
            .subscribe();
    };
    LoginComponent.prototype.checkInput1 = function (value) {
        if (value.target.value.length > 0) {
            if (value.target.id == 'name') {
                document.getElementById('name').className = 'active';
            }
            if (value.target.id == 'password') {
                document.getElementById('password').className = 'active';
            }
        }
        else {
            if (value.target.id == 'name') {
                document.getElementById('name').className = '';
            }
            if (value.target.id == 'password') {
                document.getElementById('password').className = '';
            }
        }
    };
    LoginComponent.prototype.checkInput2 = function (value) {
        if (value.target.value.length > 0) {
            if (value.target.id == 'name') {
                document.getElementById('name').className = 'active';
            }
            if (value.target.id == 'password') {
                document.getElementById('password').className = 'active';
            }
        }
        else {
            if (value.target.id == 'name') {
                document.getElementById('name').className = '';
            }
            if (value.target.id == 'password') {
                document.getElementById('password').className = '';
            }
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'app/login/login.component.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map