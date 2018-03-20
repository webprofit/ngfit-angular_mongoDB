import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataService } from '../common/data.service';


@Injectable()
export class UserService extends DataService {

  method: string;
  url: string;

  constructor(
    protected _http: HttpClient
  ) {
    super(_http);
  }

  getUsers() {
    return this.mainDataSvc('get', '/api/users')
    .toPromise();
    // return this._http.get('/api/users');
      // .map(result => this.result = result);
  }

  addUser(user) {
    return this.mainDataSvc('post', '/api/adduser', user )
    .toPromise();
  }

  deleteItem(id) {
    return this.mainDataSvc('delete', `/api/deleteItem/${id}`)
    .toPromise();
  }

}
