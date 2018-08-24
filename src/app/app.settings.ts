import { environment } from '../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

export class AppSettings {
  public static messages = {
    // Login
    ENTER_USERNAME_PASSWORD: 'Please enter your username and password',
    LOGIN_FAILED: 'Login failed',

    // Customer
    CUSTOMER_DATA_FAILED: 'Error retrieving Customer data',

    // Dashboard
    DASHBOARD_DATA_FAILED: 'Error retrieving Dashboard data',

    // Report
    REPORT_DATA_FAILED: 'Error retrieving Report data'
  };

  public static API = {

    LOGIN: environment.apiUrl + '/auth',
    REGISTRATION: environment.apiUrl + '/insertUsers',
    FORGOT_PASSWORD: environment.apiUrl + '/forget',
    FILE_UPLOAD: environment.apiUrl + '/upload'
  };
}
