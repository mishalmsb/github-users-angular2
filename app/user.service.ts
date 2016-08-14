// Imports
import { Injectable }    from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import { User } from './user'
import 'rxjs/add/operator/toPromise';

// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class UserService {

  // Class constructor with Jsonp injected
  constructor(private jsonp: Jsonp, private http: Http ) { }
  // Base URL for Petfinder API

  private usersUrl  = 'https://api.github.com/search/users?q=';
  private userUrl   = 'https://api.github.com/users/';
  // Get a list if pets based on animal

  findUsers(user) {
    return this.http.get(this.usersUrl + user)
                    .map(response => <User[]> response.json().items);
                    // .map(response => {
                    //   <User[]> response.json().items,
                    //   //console.log(response.json().items)
                    // })

  }

  findUserByLogin(user) {
    return this.http.get(this.userUrl + user)
                    .map(response => {
                      return  response.json()
                    })
  }

  // self.getUser = function(user) {
  //       $http({
  //           method : "GET",
  //           url : "https://api.github.com/users/" + user 
  //        }).then(function mySucces(response) {
  //           self.user = response ;
  //           self.getUserRepo(user);
  //        }, function myError(response) {
  //           self.alert = response.data.message;
  //        });
  //   }
  //   self.getUserRepo = function(user) {
  //       self.user.name = user
  //       $http({
  //           method : "GET",
  //           url : "https://api.github.com/users/"+user+"/repos?page=1&per_page=100"
  //        }).then(function mySucces(response) {
  //           self.repos = response.data;
  //        }, function myError(response) {
  //           self.alert = response.data.message;
  //        });
  //   }
}
