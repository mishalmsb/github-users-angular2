"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// Import App Component to be bootstrapped
var app_component_1 = require('./app.component');
// Import configured routes
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
// Bootstrap app with configured routes
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS, http_2.JSONP_PROVIDERS, http_1.HTTP_PROVIDERS
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map