// Imports
import { provideRouter, RouterConfig } from '@angular/router';

import { UserRoutes }    from './users/user.routes';

// Route Configuration
export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  ...UserRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
