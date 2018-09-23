import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-onlinetraining',
  templateUrl: './onlinetraining.component.html',
  styleUrls: ['./onlinetraining.component.css']
})
export class OnlinetrainingComponent implements OnInit {
  email: any;
  name: any;
  mobile: any;
  message: any;
  city: any;
  constructor(
    private _routes: Router,
    public loginService: LoginService,
    public toastr: ToastrManager
  ) {}
  token = sessionStorage.getItem('token');
  ngOnInit() {
    console.log('token', this.token);
  }

  mean(type) {
    this._routes.navigate([`/selfplaced/${type}`]);
  }
  register() {
    const body = {
      email: this.email,
      name: this.name,
      mobile: this.mobile,
      city: this.city,
      message: this.message
    };

    this.loginService.register(body).subscribe(data => {
      if (data) {
        this.empty();
        this.toastr.successToastr(
          'Thank you for registering RST Gloabal',
          'Success!'
        );
      } else {
        this.toastr.errorToastr('Error.', 'Error!');
      }
    });
  }
  empty() {
    this.email = '';
    this.name = '';
    this.mobile = '';
    this.city = '';
    this.message = '';
  }
}
