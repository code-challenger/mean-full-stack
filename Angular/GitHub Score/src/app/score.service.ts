import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ScoreService {

  private ghAPI: string = "https://api.github.com/users/";

  constructor(private _http: Http) { }

  retrieveUser(login:string){
    return this._http.get(this.ghAPI+login)
      .map(data => data.json())
      .toPromise();
  }

}
