import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CrudService {
  url = 'http://127.0.0.1:8000/api/';

  constructor(private _http: Http) { }

  loginFunction(user) {
    return this._http.post(this.url + 'UserLogin', user).map(res => {
      return res.json();
    });
  }

  readFunction() {
    return this._http.get(this.url + 'UserShow').map( res => {
      return res.json();
    });
  }

  createFunction(user) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'UserCreated', user, options).map((res: any) => {
      return res.json();
    });
  }

  updateFunction(userModify) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'UserUpdate', userModify, options)
      .map(res => {
        return res.json();
      });
  }

  deleteFunction(user) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'UserDelete', user, options).map(res => {
    return res.json();
    });
  }

}
