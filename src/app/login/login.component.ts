import { Component, OnInit } from '@angular/core';
import {Routes, Router} from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _loginService: LoginService, private _router: Router) {}
  username = 'bhaskar';
  password = '1234';
  ngOnInit() {}

  login() {
    const body = { username: this.username, password: this.password };
    this._loginService.login(body).subscribe(data => {
      if (data.success) {
        this._router.navigate(['/home']);
        console.log('success');
      }
    });
  }
}
