"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_component_1 = require("../app/user.component");
var usermore_component_1 = require("../app/usermore.component");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var core_1 = require("@angular/core");
var expense_component_1 = require("./expense.component");
var expensegrid_component_1 = require("./expensegrid.component");
var fontcolor_directive_1 = require("./CustomDirectives/fontcolor.directive");
var appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'userbasic' },
    { path: "userbasic", component: user_component_1.UserComponent },
    { path: "usermoreinfo", component: usermore_component_1.UserMoreComponent },
    { path: "expenseinfo", component: expense_component_1.ExpenseComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [
    app_component_1.AppComponent,
    user_component_1.UserComponent,
    usermore_component_1.UserMoreComponent,
    expense_component_1.ExpenseComponent,
    expensegrid_component_1.ExpenseGridComponent,
    fontcolor_directive_1.FontColorDirective
];
//# sourceMappingURL=app.routing.js.map