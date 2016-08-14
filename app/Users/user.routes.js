"use strict";
var user_list_component_1 = require('./user-list.component');
var user_details_component_1 = require('./user-details.component');
// Route Configuration
exports.UserRoutes = [
    { path: 'users', component: user_list_component_1.UserListComponent },
    { path: 'users/:login', component: user_details_component_1.UserDetailsComponent }
];
//# sourceMappingURL=user.routes.js.map