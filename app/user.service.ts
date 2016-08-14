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

  private usersUrl = 'https://api.github.com/search/users?q=';
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
    console.log(user);
  }
}
