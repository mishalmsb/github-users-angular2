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
var UserDetailsComponent = (function () {
    function UserDetailsComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    // Load data ones componet is ready
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to route params
        this.sub = this.route.params.subscribe(function (params) {
            var login = params['login'];
            // Retrieve Pet with Id route param
            _this.userService.findUserByLogin(login).subscribe(function (user) { return _this.user = user; });
        });
        this.userService.findUserByLogin(login);
    };
    UserDetailsComponent = __decorate([
        core_1.Component({
            template: "\n      <h1> User </h1>\n    ",
            // Providers
            providers: [user_service_1.UserService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, Object])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=user-details.component.js.map