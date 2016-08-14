// Imports
import { provideRouter, RouterConfig } from '@angular/router';

import { UserListComponent }    from './user-list.component';
import { UserDetailsComponent }    from './user-details.component';

// Route Configuration
export const UserRoutes: RouterConfig = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:login', component: UserDetailsComponent }
];

