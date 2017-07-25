import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./admin/admin.component";

const appRoutes : Routes = [
     {path : '', component : LoginComponent},
      {path : 'admin', component : AdminComponent}
    // {path : "/admin", component : AdminComponent}
];

export const routing = RouterModule.forRoot(appRoutes);