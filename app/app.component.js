"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "Online Exam System";
        // public document.addEventListener : Document 
        // document.addEventListener("keyup", function(e : any) {
        //     if (e.keyCode == 27 || e.keyCode == 13) {
        //         this.closeForm();
        //     }
        // }) ;
    }
    // constructor(renderer: Renderer) {
    //     renderer.listen("keyup", 'click', (e: any) => {
    //         if (e.keyCode == 27 || e.keyCode == 13) {
    //             this.closeForm();
    //         }
    //     });
    // }
    AppComponent.prototype.openForm1 = function () {
        document.getElementById('mainButton1').className = 'active';
    };
    AppComponent.prototype.openForm2 = function () {
        document.getElementById('mainButton2').className = 'active';
    };
    AppComponent.prototype.closeForm1 = function () {
        document.getElementById('mainButton1').className = '';
    };
    AppComponent.prototype.closeForm2 = function () {
        document.getElementById('mainButton2').className = '';
    };
    AppComponent.prototype.checkInput1 = function (value) {
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
    AppComponent.prototype.checkInput2 = function (value) {
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        templateUrl: 'app/app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map