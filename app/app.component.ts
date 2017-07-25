import { Component, Renderer, ElementRef } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    private pageTitle: string = "Online Exam System"

}