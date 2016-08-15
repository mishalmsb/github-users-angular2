// Import component decorator
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
  template: `
      <div *ngIf="user" class='container' id='container'>
        <div class="row">
            <div class="col-md-2 col-md-offset-3">
              <div class='card-wrapper'>
                <div class='main-window' id='main-window'>
                  <div class='user-image' [ngStyle]="{'background-image': 'url(' + user.avatar_url + ')'}">
                    <div class='username'>{{ user.name }}</div>
                  </div>
                  <div class='user-info'>
                    <div class='quote'> 
                      <span class="glyphicon glyphicon-home"></span> 
                      {{ user.location }}
                      <br>
                      <a href="mailto:{{user.email}}">
                        <span class="glyphicon glyphicon-envelope" ng-show="user.email"></span>
                      </a>
                      <a href="{{user.html_url}}" target="_blank"> 
                        <i class="glyphicon glyphicon-link" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                  <div class='repo-info'>
                    <div class='repo-info-elm' *ngFor="let r of repo "> 
                      <a href="{{r.html_url}}" target="_blanc"> {{ r.name }} </a> 
                    </div>
                  </div>
                  <div class='repo-count'>
                    <div class='repo-count' *ngFor="let r of repo "> 
                      <span class='lg'>{{ r.stargazers_count }}</span>
                    </div>
                  </div>
                  <div class="user-info"> 
                      <div class='quote'>
                        <a [routerLink]="['/users']">
                          <span class="glyphicon glyphicon-arrow-left"></span>
                        </a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
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
  private repo:string[];

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  dynamicSort(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          var result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
          return result * sortOrder;
      }
  }

  ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }

  // Load data ones componet is ready
  ngOnInit() {
      console.log("User List detail Loaded");
      // Subscribe to route params
        this.sub = this.route.params.subscribe(params => {
           let login = params['login'];
          // Retrieve User with Login route param
           this.userService.findUserByLogin(login).subscribe(user => {
              this.user = user,
              console.log(user.html_url)
           });
           this.userService.getUserRepo(login).subscribe(repo => {
              this.repo = repo,
              this.repo.sort(this.dynamicSort("stargazers_count"));
              if (this.repo.length > 3) {
                this.repo = this.repo.slice(0, 3);
              }
              console.log(this.repo)
           })
            
        });
  }

  

}