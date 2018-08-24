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
export class LoginService {
  public userLoggedIn = false;
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}
  // login api
  login(body) {
    sessionStorage.clear();

    return this.http
      .post(AppSettings.API.LOGIN, body, this.options)
      .map((response: Response) => {
        const data = response.json();
        if (data.success) {
          if (data && data.token) {
            console.log('ff', data);
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('name', data.data.name);
            sessionStorage.setItem('email', data.data.email);
            sessionStorage.setItem('mobile', data.data.mobile);
            sessionStorage.setItem('role', data.data.role);
            sessionStorage.setItem('cpurse_id', data.data.cpurse_id);

          }
        }
        return data;
      });
  }
  // forgot password api
  forgetPassword(values: any = '') {
    const body = JSON.stringify(values);
    return this.http
      .post(AppSettings.API.FORGOT_PASSWORD, body, this.token())
      .map((response: Response) => response.json());
  }

  logout() {
    sessionStorage.clear();
    // sessionStorage.removeItem('token');
  }
  // change password api
  //   changePassword(values: any = '') {
  //     const body = JSON.stringify(values);
  //     return this.http
  //       .post(AppSettings.API.CHANGE_PASSWORD, body, this.token())
  //       .map((response: Response) => response.json());
  //   }

  token() {
    return new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: 'BEARER ' + sessionStorage.getItem('token')
      })
    });
  }
}
