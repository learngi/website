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
export class UploadService {
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}
  // vendors count
  upload(values: any = '') {
    // const body = JSON.stringify(values);
    console.log(values);
    return this.http
      .post(AppSettings.API.FILE_UPLOAD, values, this.token())
      .map((response: Response) => response.json());
  }

  token() {
    return new RequestOptions({
      headers: new Headers({
        // 'Content-Type': 'application/json',
        Authorization: 'BEARER ' + sessionStorage.getItem('token')
      })
    });
  }
}
