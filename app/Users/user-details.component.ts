// Import component decorator
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  template: `
      <h1> User </h1>
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
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        let login = params['login'];
       // Retrieve Pet with Id route param
        this.userService.findUserByLogin(login).subscribe(user => this.user = user);

      

    });

    this.userService.findUserByLogin(login);
  }

  // ngOnDestroy() {
  //     // Clean sub to avoid memory leak
  //   this.sub.unsubscribe();
  // }
}