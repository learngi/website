import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-classtraining',
  templateUrl: './classtraining.component.html',
  styleUrls: ['./classtraining.component.css']
})
export class ClasstrainingComponent implements OnInit {
  token = sessionStorage.getItem('token');

  email: any;
  name: any;
  mobile: any;
  message: any;
  city: any;
  constructor(
    public loginService: LoginService,
    public toastr: ToastrManager
  ) {}

  ngOnInit() {
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
        this.toastr.successToastr(
          'Thank you for registering RST Gloabal',
          'Success!'
        );
      } else {
        this.toastr.errorToastr('Error.', 'Error!');
      }
    });
  }
}
