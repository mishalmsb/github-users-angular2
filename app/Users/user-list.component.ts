// Import component decorator
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { User } from '../user';
import { FormBuilder, Validators } from '@angular/common';

@Component({
  template: `

    <div class="row">
      <div class="  col-md-3 col-md-offset-5 col-sm-offset-4">
        <div class="input-group add-on">
          <input  id="srch-term" class="form-control" type="text" id="name"
                 required
                 [(ngModel)]="searchQuery" name="name" (keyup.enter)="searchUser()">
           <div class="input-group-btn">
              <button type="button" class="btn btn-default" (click)="searchUser()">
                 <i class="glyphicon glyphicon-search"></i>
              </button>
            </div>
          </div>
      </div>
    </div>

    <div class="row">
      <div class="container users-container">
          <div class="col-xs-18 col-sm-6 col-md-3" *ngFor="let user of users | async">
            <a [routerLink]="['/users', user.login]">
              <div class="thumbnail">
                  <img src="{{ user.avatar_url }}" id="imgThumbnail">
                  <div class="caption">
                      <h5>{{ user.login }}</h5>
                  </div>
              </div>
            </a>
          </div>
      </div>
    </div>
    `,
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES]
})
// Component class
export class UserListComponent implements OnInit {


  searchQuery = "";
  user        = "";
  users:    Observable<User[]>;

  constructor(private userService: UserService) {}


  searchUser(user) {
    this.users    = this.userService.findUsers(this.searchQuery);
  }

  ngOnInit() {
    console.log("User list comonent init");
  }


}
