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
var user_sharingservice_1 = require("./user.sharingservice");
var user_httpservice_1 = require("./user.httpservice");
var UserMoreComponent = /** @class */ (function () {
    function UserMoreComponent(router, _userSharingService, _userHttpService) {
        //this.userBasicData = this._userSharingService.getUserData();
        this.router = router;
        this._userSharingService = _userSharingService;
        this._userHttpService = _userHttpService;
        this.userBasicData = [];
        this.show = false;
    }
    UserMoreComponent.prototype.getUsers = function () {
        var _this = this;
        debugger;
        this._userHttpService.getUsers().subscribe(function (data) {
            return _this.testData(data);
        }, function (error) {
            return _this.errorMessage = error;
        });
    };
    UserMoreComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserMoreComponent.prototype.testData = function (test) {
        this.show = true;
        this.userBasicData = test;
    };
    UserMoreComponent.prototype.onSubmit = function () {
        this.router.navigateByUrl('/userbasic');
    };
    UserMoreComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/usermore.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, user_sharingservice_1.UserSharingService,
            user_httpservice_1.UserHttpService])
    ], UserMoreComponent);
    return UserMoreComponent;
}());
exports.UserMoreComponent = UserMoreComponent;
//# sourceMappingURL=usermore.component.js.map