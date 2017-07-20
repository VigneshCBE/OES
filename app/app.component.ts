import { Component, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    private pageTitle: string = "Online Exam System"


    // constructor(renderer: Renderer) {
    //     renderer.listen("keyup", 'click', (e: any) => {
    //         if (e.keyCode == 27 || e.keyCode == 13) {
    //             this.closeForm();
    //         }
    //     });
    // }

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


    // public document.addEventListener : Document 

    // document.addEventListener("keyup", function(e : any) {
    //     if (e.keyCode == 27 || e.keyCode == 13) {
    //         this.closeForm();
    //     }
    // }) ;

}
