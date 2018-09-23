import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

import { HomeService } from '../home/home.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(public _homeService: HomeService, public toastr: ToastrManager) {}
  email = '';
  subject = '';
  message = '';
  ngOnInit() {}

  register() {
    const body = {
      email: this.email,
      subject: this.subject,
      message: this.message
    };
    this._homeService.register(body).subscribe(data => {
      console.log('data is', data);
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
    this.subject = '';
    this.message = '';
  }
}
