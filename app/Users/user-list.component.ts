// Import component decorator
import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';

//import { Pet } from '../pet';
import { User } from '../user';

@Component({
  template: `


    <input type="text" id="name"
           required
           [(ngModel)]="searchQuery" name="name">

     <button type="button" class="btn btn-default" (click)="searchUser()">Search User</button>

    
    <li class="mdl-list__item" *ngFor="let user of users | async">
      
      <a [routerLink]="['/user']">{{ user.login }}</a>
    </li>
    `,
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES]
})
// Component class
export class UserListComponent implements OnInit {

  searchQuery = "";
  user        = "";
  users:    Observable<User[]>;
  // cats:     Observable<Pet[]>;
  
  constructor(private userService: UserService) {

  }
  searchUser() {
    this.users  = this.userService.findUsers(this.searchQuery);
  }
  getUser(user) {
    this.router.navigate(['/user', user]);
  }

  ngOnInit() {
    // this.cats   = this.petService.findPets('cat');
    //this.users  = this.userService.findUsers();
    this.users  = this.userService.findUsers("mishal");
  }


}
