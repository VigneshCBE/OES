import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [ 
    BrowserModule
    ],
  declarations: [ 
    AppComponent,
    AdminComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
