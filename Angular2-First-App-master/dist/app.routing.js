"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_component_1 = require("../app/user.component");
var usermore_component_1 = require("../app/usermore.component");
exports.AppRoutes = [
    { path: "", component: user_component_1.UserComponent },
    { path: "usermoreinfo", component: usermore_component_1.UserMoreComponent }
];
exports.AppComponents = [
    user_component_1.UserComponent,
    usermore_component_1.UserMoreComponent
];
//# sourceMappingURL=app.routing.js.map