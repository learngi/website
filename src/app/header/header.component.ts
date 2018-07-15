/// <reference path="../../../typings/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _routes: Router, private _route: ActivatedRoute) { }

  pageType = '';
  ngOnInit() {
    this.pageType = this._route.snapshot.url[0].path;
    // tslint:disable-next-line:no-unused-expression
    <any>$(document).ready(function () {
      const navbar = $('.menu_inner_area,.main_menu_bg,.menu_inner_area_two');
      const nav_offset_top = $('.main_menu_area,.main_menu_area_three,.main_menu_area_four,.main_menu_area_five,.error_area,.coming_soon_area').offset().top + 200;
      /*-------------------------------------------------------------------------------
      Navbar
    -------------------------------------------------------------------------------*/

      navbar.affix({
        offset: {
          top: nav_offset_top,
        }
      });


      navbar.on('affix.bs.affix', function () {
        if (!navbar.hasClass('affix')) {
          navbar.addClass('animated slideInDown');
        }
      });

      navbar.on('affixed-top.bs.affix', function () {
        navbar.removeClass('animated slideInDown');
      });
    });
  }

  about() {
    console.log('her');
    this._routes.navigate(['/about']);
  }

  home() {
    console.log('her');
    this._routes.navigate(['/home']);
  }
  selfplaced() {
    this._routes.navigate(['/selfplaced']);
  }
  contact() {
    this._routes.navigate(['/contact']);
  }

}
