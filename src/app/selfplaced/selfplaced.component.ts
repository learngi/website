import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-selfplaced',
  templateUrl: './selfplaced.component.html',
  styleUrls: ['./selfplaced.component.css']
})
export class SelfplacedComponent implements OnInit {
  constructor(private _routes: Router) {}
  token = sessionStorage.getItem('token');
  ngOnInit() {}
  training() {
    this._routes.navigate(['/trainings']);
  }
}
