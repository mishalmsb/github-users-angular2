// Imports
import { Injectable }    from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import { User } from './user';

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
  user        = "";
  
  test() {
        let wikiUrl = 'https://api.github.com/search/users?q=mishal';

        // let params = new URLSearchParams();
        // params.set('search', term); // the user's search value
        // params.set('action', 'opensearch');
        // params.set('format', 'json');
        // params.set('callback', 'JSONP_CALLBACK');
        // TODO: Add error handling

        return this.jsonp
                   .get(wikiUrl)
                   .map(request => {
                      console.log("hello");
                      <string[]> request.json()[1]
                   });
      }


  

  findUsers(user) {

    return this.http.get(this.usersUrl + user)
                    .map(response => {
                      this.user = response.json().items;
                      return <User[]> response.json().items
                    })
                    //.map(response => <User[]> response.json().items);
                    // .map(response => {
                    //   <User[]> response.json().items,
                    //   //console.log(response.json().items)
                    // })

  }

  findUserByLogin(user) {

    return  this.http.get(this.userUrl + user)
                    .map(response => {
                      return  response.json()
                    })
  }

  getUserRepo(user) {
      return this.http.get("https://api.github.com/users/"+user+"/repos?page=1&per_page=100")
                          .map(response => {
                            return  response.json()
                          })
  }



}
