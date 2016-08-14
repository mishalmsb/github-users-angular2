"use strict";
// Imports
var router_1 = require('@angular/router');
var user_routes_1 = require('./users/user.routes');
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    }
].concat(user_routes_1.UserRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map