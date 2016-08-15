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
// Import component decorator
var core_1 = require('@angular/core');
var user_service_1 = require('../user.service');
var router_1 = require('@angular/router');
var UserListComponent = (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.searchQuery = "";
        this.user = "";
    }
    UserListComponent.prototype.searchUser = function (user) {
        this.users = this.userService.findUsers(this.searchQuery);
    };
    UserListComponent.prototype.ngOnInit = function () {
        console.log("User list comonent init");
    };
    UserListComponent = __decorate([
        core_1.Component({
            template: "\n\n    <div class=\"row\">\n      <div class=\"  col-md-3 col-md-offset-5 col-sm-offset-4\">\n        <div class=\"input-group add-on\">\n          <input  id=\"srch-term\" class=\"form-control\" type=\"text\" id=\"name\"\n                 required\n                 [(ngModel)]=\"searchQuery\" name=\"name\" (keyup.enter)=\"searchUser()\">\n           <div class=\"input-group-btn\">\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"searchUser()\">\n                 <i class=\"glyphicon glyphicon-search\"></i>\n              </button>\n            </div>\n          </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"container users-container\">\n          <div class=\"col-xs-18 col-sm-6 col-md-3\" *ngFor=\"let user of users | async\">\n            <a [routerLink]=\"['/users', user.login]\">\n              <div class=\"thumbnail\">\n                  <img src=\"{{ user.avatar_url }}\" id=\"imgThumbnail\">\n                  <div class=\"caption\">\n                      <h5>{{ user.login }}</h5>\n                  </div>\n              </div>\n            </a>\n          </div>\n      </div>\n    </div>\n    ",
            providers: [user_service_1.UserService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map