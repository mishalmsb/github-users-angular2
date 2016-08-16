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
// Imports
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
// Decorator to tell Angular that this class can be injected as a service to another class
var UserService = (function () {
    // Class constructor with Jsonp injected
    function UserService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
        // Base URL for Petfinder API
        this.usersUrl = 'https://api.github.com/search/users?q=';
        this.userUrl = 'https://api.github.com/users/';
        // Get a list if pets based on animal
        this.user = "";
    }
    UserService.prototype.test = function () {
        var wikiUrl = 'https://api.github.com/search/users?q=mishal';
        // let params = new URLSearchParams();
        // params.set('search', term); // the user's search value
        // params.set('action', 'opensearch');
        // params.set('format', 'json');
        // params.set('callback', 'JSONP_CALLBACK');
        // TODO: Add error handling
        return this.jsonp
            .get(wikiUrl)
            .map(function (request) {
            console.log("hello");
            request.json()[1];
        });
    };
    UserService.prototype.findUsers = function (user) {
        var _this = this;
        return this.http.get(this.usersUrl + user)
            .map(function (response) {
            _this.user = response.json().items;
            return response.json().items;
        });
        //.map(response => <User[]> response.json().items);
        // .map(response => {
        //   <User[]> response.json().items,
        //   //console.log(response.json().items)
        // })
    };
    UserService.prototype.findUserByLogin = function (user) {
        return this.http.get(this.userUrl + user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.getUserRepo = function (user) {
        return this.http.get("https://api.github.com/users/" + user + "/repos?page=1&per_page=100")
            .map(function (response) {
            return response.json();
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp, http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map