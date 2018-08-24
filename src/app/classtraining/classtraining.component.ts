import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classtraining',
  templateUrl: './classtraining.component.html',
  styleUrls: ['./classtraining.component.css']
})
export class ClasstrainingComponent implements OnInit {
  token = sessionStorage.getItem('token');

  constructor() { }

  ngOnInit() {
  }

}
