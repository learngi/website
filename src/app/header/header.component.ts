/// <reference path="../../../typings/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '../home//home.service';
import { ToastrManager } from 'ng6-toastr-notifications';
declare var $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private _routes: Router,
    private _route: ActivatedRoute,
    public _homeService: HomeService,
    public toastr: ToastrManager
  ) {}
  token = sessionStorage.getItem('token');
  pageType = '';
  role = sessionStorage.getItem('role');
  email = '';
  name = '';
  mobile = '';
  city = '';
  message = '';
  ngOnInit() {
    this.pageType = this._route.snapshot.url[0].path;
    // tslint:disable-next-line:no-unused-expression
    // $('.bar_menu,#nav-icon1').on('click', function() {
    //   if ($('.right_sidebar_menu').hasClass('open')) {
    //     $('.right_sidebar_menu').removeClass('open');
    //   } else {
    //     $('.right_sidebar_menu').addClass('open');
    //   }
    //   return false;
    // });
    // tslint:disable-next-line:no-unused-expression
    <any>$(document).ready(function() {
      const navbar = $('.menu_inner_area,.main_menu_bg,.menu_inner_area_two');
      const nav_offset_top =
        $(
          '.main_menu_area,.main_menu_area_three,.main_menu_area_four,.main_menu_area_five,.error_area,.coming_soon_area'
        ).offset().top + 200;
      /*-------------------------------------------------------------------------------
      Navbar
    -------------------------------------------------------------------------------*/

      navbar.affix({
        offset: {
          top: nav_offset_top
        }
      });

      navbar.on('affix.bs.affix', function() {
        if (!navbar.hasClass('affix')) {
          navbar.addClass('animated slideInDown');
        }
      });

      navbar.on('affixed-top.bs.affix', function() {
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
  online() {
    this._routes.navigate(['/online']);
  }
  classTraining() {
    this._routes.navigate(['/classtraining']);
  }
  corporate() {
    this._routes.navigate(['/corporate']);
  }

  login() {
    this._routes.navigate(['/login']);
  }
  logout() {
    sessionStorage.clear();
    this._routes.navigate(['/home']);
  }

  register() {
    this._routes.navigate(['/register']);
  }
  upload() {
    this._routes.navigate(['/upload']);
  }
  internship() {
    this._routes.navigate(['/intership']);
  }
  register1() {
    const body = {
      email: this.email,
      name: this.name,
      mobile: this.mobile,
      city: this.city,
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
    this.name = '';
    this.mobile = '';
    this.city = '';
    this.message = '';
  }
}
