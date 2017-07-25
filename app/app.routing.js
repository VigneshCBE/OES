"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var admin_component_1 = require("./admin/admin.component");
var appRoutes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'admin', component: admin_component_1.AdminComponent }
    // {path : "/admin", component : AdminComponent}
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map