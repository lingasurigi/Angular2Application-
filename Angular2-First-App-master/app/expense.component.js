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
var router_1 = require("@angular/router");
var expense_1 = require("./expense");
var ExpenseComponent = /** @class */ (function () {
    function ExpenseComponent(router) {
        this.router = router;
        this.show = false;
        this.expense = new expense_1.Expense();
        this.expenseNotEdit = new expense_1.Expense();
    }
    ExpenseComponent.prototype.onSubmit = function () {
        this.show = true;
        this.expenseData = this.expense;
    };
    ExpenseComponent.prototype.displayValues = function (expenseInfo) {
        debugger;
        this.expenseNotEdit = expenseInfo;
    };
    ExpenseComponent = __decorate([
        core_1.Component({
            selector: 'expense-controls',
            templateUrl: './app/expense.component.html',
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ExpenseComponent);
    return ExpenseComponent;
}());
exports.ExpenseComponent = ExpenseComponent;
//# sourceMappingURL=expense.component.js.map