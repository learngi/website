import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './register.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private _registrationService: RegistrationService) {}
  username = '';
  name = '';
  mobile = '';
  email = '';
  course_id = '';
  ngOnInit() {}

  register() {
    const body = {
      id: '',
      username: this.username,
      name: this.name,
      mobile: this.mobile,
      email: this.email,
      course_id: this.course_id
    };
    console.log('body', body);
    this._registrationService.register(body).subscribe(data => {
      if (data) {
        console.log('success');
      }
    });
  }
}
