import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onlinetraining',
  templateUrl: './onlinetraining.component.html',
  styleUrls: ['./onlinetraining.component.css']
})
export class OnlinetrainingComponent implements OnInit {
  constructor(private _routes: Router) {}
  token = sessionStorage.getItem('token');
  ngOnInit() {
    console.log('token', this.token);
  }

  mean(type) {
    this._routes.navigate([`/selfplaced/${type}`]);
  }
}
