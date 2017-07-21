import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Response } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule
    ],
  declarations: [ 
    AppComponent,
    LoginComponent,
    AdminComponent ],
  providers : [ LoginService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
