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
var UserSharingService = /** @class */ (function () {
    function UserSharingService() {
    }
    UserSharingService.prototype.setUserData = function (data) {
        this.user = data;
    };
    UserSharingService.prototype.getUserData = function () {
        var temp = this.user;
        this.clearData();
        return temp;
    };
    UserSharingService.prototype.clearData = function () {
        this.user = undefined;
    };
    UserSharingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UserSharingService);
    return UserSharingService;
}());
exports.UserSharingService = UserSharingService;
//# sourceMappingURL=user.sharingservice.js.map