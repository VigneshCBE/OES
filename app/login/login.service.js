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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var router_1 = require("@angular/router");
var CryptoJS = require("crypto-js");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var LoginService = (function () {
    function LoginService(_http, _route) {
        this._http = _http;
        this._route = _route;
        this._loginServiceUrl = "http://localhost:3000/users";
    }
    LoginService.prototype.loginAdmin = function (username, password) {
        var _this = this;
        return this._http.get(this._loginServiceUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) {
            var users = data;
            //let Pwd = CryptoJS.AES.encrypt(password,"longlivetamil");
            //  let encryptPwd = CryptoJS.AES.encrypt(password,"longlivetamil"); //from UI
            var decryptPwd = CryptoJS.AES.decrypt(users[0].password, "longlivetamil"); // from service call
            var pwd = decryptPwd.toString();
            console.log("Epwd  " + decryptPwd + " Dpwd ");
            if (username == users[0].username) {
                if (password == decryptPwd) {
                    localStorage.setItem("currentUser", users[0].username);
                    _this._route.navigateByUrl('/admin');
                }
                else {
                    alert("Password you have typed is wrong");
                }
            }
            else {
                alert("Userid does not exist");
            }
        })
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map