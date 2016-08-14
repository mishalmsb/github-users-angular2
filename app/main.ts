import { bootstrap }    from '@angular/platform-browser-dynamic';
// Import App Component to be bootstrapped
import { AppComponent } from './app.component';
// Import configured routes
import { APP_ROUTER_PROVIDERS } from './app.routes';
import {HTTP_PROVIDERS} from '@angular/http';
import { JSONP_PROVIDERS } from '@angular/http';

// Bootstrap app with configured routes
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS, JSONP_PROVIDERS, HTTP_PROVIDERS
])
.catch(err => console.error(err));
