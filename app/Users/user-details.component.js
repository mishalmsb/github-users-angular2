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
    UserDetailsComponent.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    UserDetailsComponent.prototype.ngOnDestroy = function () {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    };
    // Load data ones componet is ready
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("User List detail Loaded");
        // Subscribe to route params
        this.sub = this.route.params.subscribe(function (params) {
            var login = params['login'];
            // Retrieve User with Login route param
            _this.userService.findUserByLogin(login).subscribe(function (user) {
                _this.user = user,
                    console.log(user);
            });
            _this.userService.getUserRepo(login).subscribe(function (repo) {
                _this.repo = repo,
                    _this.repo.sort(_this.dynamicSort("stargazers_count"));
                if (_this.repo.length > 3) {
                    _this.repo = _this.repo.slice(0, 3);
                }
                console.log(_this.repo);
            });
        });
    };
    UserDetailsComponent = __decorate([
        core_1.Component({
            template: "\n      <h1> User </h1>\n      <div *ngIf=\"user\">\n          <h2>{{ user.name }}</h2>\n          <li class=\"mdl-list__item\" *ngFor=\"let r of repo \">\n          <a href=\"{{ r.html_url }}\" target=\"_blank\">\n            {{ r.name }} {{ r.stargazers_count }}\n          </a>\n          </li>\n      </div>\n      <a [routerLink]=\"['/users']\">Back</a>\n\n\n      <div *ngIf=\"user\" class='container' id='container'>\n        <div class=\"row\">\n            <div class=\"col-md-2 col-md-offset-3\">\n              <div class='card-wrapper'>\n                <div class='main-window' id='main-window'>\n                  <div class='user-image' [ngStyle]=\"{'background-image': 'url(' + user.avatar_url + ')'}\">\n                    <div class='username'>{{ user.name }}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n\n\n\n    ",
            // Providers
            providers: [user_service_1.UserService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=user-details.component.js.map