// Import component decorator
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
  template: `
      <h1> User </h1>
      <div *ngIf="user">
          <h2>{{user.login}}</h2>
      </div>
    `,
    // Providers
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES]
})
// Component class implementing OnInit
export class UserDetailsComponent implements OnInit {
  // Private properties for binding
  private sub:any;
  private user:string[];

  constructor(private userService: UserService, private route: ActivatedRoute) {

  }

  // Load data ones componet is ready
  ngOnInit() {
      console.log("User List detail Loaded")
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
         let login = params['login'];
        // Retrieve User with Login route param
         this.userService.findUserByLogin(login).subscribe(user => this.user = user);
       });
  }

  ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}