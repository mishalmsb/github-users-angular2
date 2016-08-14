import { Component } from '@angular/core';
// Import router directives
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'my-app',
  template: `
    <!-- Router Outlet -->
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  // Tell component to use router directives
  directives: [ROUTER_DIRECTIVES]
})

// App Component class
export class AppComponent{}
