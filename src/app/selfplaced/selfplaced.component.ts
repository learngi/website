/// <reference path="../../../typings/index.d.ts" />

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selfplaced',
  templateUrl: './selfplaced.component.html',
  styleUrls: ['./selfplaced.component.css']
})
export class SelfplacedComponent implements OnInit {
  constructor(private _routes: Router, private _route: ActivatedRoute) {}
  token = sessionStorage.getItem('token');
  type = '';
  ngOnInit() {
    this._route.params.subscribe(params => (this.type = params['type']));
    console.log('type', this.type);
  }
  training() {
    this._routes.navigate(['/trainings']);
  }
}
