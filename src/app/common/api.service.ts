import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../app.settings';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiService {
  public userLoggedIn = false;
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}

  callApi(url: string, method: string, body: Object) {
    console.log(
      `Http call to ${url} of method: ${method} with body ${JSON.stringify(
        body
      )} `
    );
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    // if user is logged in, append toke to header
    if (localStorage.getItem('currentUser')) {
      headers.append('token', localStorage.getItem('currentUser'));
    }

    switch (method) {
      case 'post':
        return this.http
          .post(url, body)
          .map((response: Response) => response.json());
      case 'get':
        return this.http
          .get(url, options)
          .map((response: Response) => response.json());
    }
  }
}
