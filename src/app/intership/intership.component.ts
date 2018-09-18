import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-intership',
  templateUrl: './intership.component.html',
  styleUrls: ['./intership.component.css']
})
export class IntershipComponent implements OnInit {
  email: any;
  name: any;
  mobile: any;
  message: any;
  city: any;
  constructor(
    public loginService: LoginService,
    public toastr: ToastrManager
  ) {}

  ngOnInit() {}
  register() {
    console.log('here');
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
