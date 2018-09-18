import { Injectable } from '@angular/core';
import { ApiService } from '../common/api.service';
import { AppSettings } from '../app.settings';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(public _ApiService: ApiService) {}

  register(values) {
    const body = JSON.stringify(values);
    const url = AppSettings.API.REGISTER;
    return this._ApiService.callApi(url, 'post', body);
  }
}
