import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CrudTraingService {
  url = 'http://127.0.0.1:8000/api/TrainingShow';
  constructor(private _http: Http) { }

  readFunction() {
    return this._http.get(this.url).map( res => {
      return res.json();
    });
  }

  createFunction(userCreate) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url, userCreate, options).map( (res: any) => {
      return res.json();
    });
  }

  readFunctio() {
    return this._http.get(this.url).map( res => {
      return res.json();
    });
  }
}
