import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-traning',
  templateUrl: './traning.component.html',
  styleUrls: ['./traning.component.css']
})
export class TraningComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  register() {
    this._router.navigate(['/register']);
  }
}
