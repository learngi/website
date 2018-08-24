import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corparate',
  templateUrl: './corparate.component.html',
  styleUrls: ['./corparate.component.css']
})
export class CorparateComponent implements OnInit {
  token = sessionStorage.getItem('token');

  constructor() { }

  ngOnInit() {
  }

}
