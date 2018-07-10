import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {


      /*----------------------------------------------------*/
      /*  Main Slider js
      /*----------------------------------------------------*/
      function main_slider() {
        if ($('#main_slider').length) {
          $('#main_slider').revolution({
            sliderType: 'standard',
            sliderLayout: 'auto',
            delay: 4000,
            disableProgressBar: 'on',
            navigation: {
              onHoverStop: 'off',
              touch: {
                touchenabled: 'on'
              },
              arrows: {
                style: 'zeus',
                enable: true,
                hide_onmobile: true,
                hide_under: 820,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                left: {
                  h_align: 'left',
                  v_align: 'center',
                  h_offset: 5,
                  v_offset: 0
                },
                right: {
                  h_align: 'right',
                  v_align: 'center',
                  h_offset: 5,
                  v_offset: 0
                }
              },
            },
            responsiveLevels: [4096, 1320, 1199, 992, 767, 480],
            gridwidth: [1170, 1170, 960, 720, 700, 300],
            gridheight: [800, 800, 800, 800, 500, 500],
            lazyType: 'smart',
            fallbacks: {
              simplifyAll: 'off',
              nextSlideOnWindowFocus: 'off',
              disableFocusListener: false,
            }
          });
        }
      }
      main_slider();

      /*----------------------------------------------------*/
      /*  Main Slider Two js
      /*----------------------------------------------------*/
      function main_slider_two() {
        if ($('#main_slider_two').length) {
          $('#main_slider_two').revolution({
            sliderType: 'standard',
            sliderLayout: 'auto',
            delay: 4000,
            dottedOverlay: 'false',
            disableProgressBar: 'on',
            navigation: {
              onHoverStop: 'off',
              touch: {
                touchenabled: 'on'
              },
              arrows: {
                style: 'zeus',
                enable: true,
                hide_onmobile: true,
                hide_under: 820,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                left: {
                  h_align: 'left',
                  v_align: 'center',
                  h_offset: 5,
                  v_offset: 0
                },
                right: {
                  h_align: 'right',
                  v_align: 'center',
                  h_offset: 5,
                  v_offset: 0
                }
              },
            },
            responsiveLevels: [4096, 1320, 1199, 992, 767, 480],
            gridwidth: [1170, 1170, 1000, 750, 700, 320],
            gridheight: [715, 715, 715, 715, 600, 500],
            lazyType: 'none',
            parallax: {
              type: 'mouse',
              origo: 'slidercenter',
              speed: 2000,
              levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
              type: 'mouse',
              disable_onmobile: 'on'
            },
            shadow: 0,
            spinner: 'off',
            stopLoop: 'on',
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: 'off',
            autoHeight: 'off',
            fullScreenAutoWidth: 'off',
            fullScreenAlignForce: 'off',
            fullScreenOffsetContainer: '',
            fullScreenOffset: '60px',
            disableProgressBar: 'on',
            hideThumbsOnMobile: 'off',
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: 'off',
              nextSlideOnWindowFocus: 'off',
              disableFocusListener: false,
            }
          });
        }
      }
      main_slider_two();

      /*----------------------------------------------------*/
      /*  Main Slider js
      /*----------------------------------------------------*/
      function main_slider_four() {
        if ($('#main_slider_four').length) {
          $('#main_slider_four').revolution({
            sliderType: 'standard',
            sliderLayout: 'auto',
            delay: 5000,
            disableProgressBar: 'on',
            navigation: {
              onHoverStop: 'off',
              touch: {
                touchenabled: 'on'
              },
              arrows: {
                style: 'zeus',
                enable: true,
                hide_onmobile: true,
                hide_under: 767,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                left: {
                  h_align: 'left',
                  v_align: 'center',
                  h_offset: 5,
                  v_offset: 0
                },
                right: {
                  h_align: 'right',
                  v_align: 'center',
                  h_offset: 5,
                  v_offset: 0
                }
              },
            },
            responsiveLevels: [4096, 1320, 1199, 992, 767, 480],
            gridwidth: [1170, 1170, 1000, 750, 550, 300],
            gridheight: [678, 678, 678, 678, 678, 500],
            lazyType: 'smart',
            fallbacks: {
              simplifyAll: 'off',
              nextSlideOnWindowFocus: 'off',
              disableFocusListener: false,
            }
          });
        }
      }
      main_slider_four();

      /*----------------------------------------------------*/
      /*  Main Slider js
      /*----------------------------------------------------*/
      function main_slider_five() {
        if ($('#main_slider_five').length) {
          $('#main_slider_five').revolution({
            sliderType: 'standard',
            sliderLayout: 'auto',
            delay: 5000,
            disableProgressBar: 'on',
            navigation: {
              onHoverStop: 'off',
              touch: {
                touchenabled: 'on'
              },
              arrows: {
                style: 'zeus',
                enable: true,
                hide_onmobile: true,
                hide_under: 767,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                left: {
                  h_align: 'left',
                  v_align: 'center',
                  h_offset: 5,
                  v_offset: 0
                },
                right: {
                  h_align: 'right',
                  v_align: 'center',
                  h_offset: 5,
                  v_offset: 0
                }
              },
            },
            responsiveLevels: [4096, 1320, 1199, 992, 767, 480],
            gridwidth: [1170, 1170, 1000, 750, 550, 300],
            gridheight: [625, 625, 625, 625, 625, 500],
            lazyType: 'smart',
            fallbacks: {
              simplifyAll: 'off',
              nextSlideOnWindowFocus: 'off',
              disableFocusListener: false,
            }
          });
        }
      }
      main_slider_five();

      /*----------------------------------------------------*/
      /*  Gallery Slider
      /*----------------------------------------------------*/
      function practice_slider() {
        if ($('.practice_slider').length) {
          $('.practice_slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 4,
            nav: true,
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            navContainerClass: 'practice_arrow',
            navText: ['<img src="img/arrow.png" alt="">', '<img src="img/arrow-left.png" alt="">'],
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              800: {
                items: 3,
              },
              1060: {
                items: 4,
              }
            }
          });
        }
      }
      practice_slider();

      /*----------------------------------------------------*/
      /*  testimonial Slider
      /*----------------------------------------------------*/
      function testimonial_slider() {
        if ($('#testimonial_slider').length) {
          $('#testimonial_slider').owlCarousel({
            loop: true,
            margin: 230,
            items: 2,
            nav: false,
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                margin: 20
              },
              650: {
                items: 2,
                margin: 100
              },
              800: {
                items: 2,
                margin: 100
              },
              1199: {
                items: 2,
              }
            }
          });
        }
      }
      testimonial_slider();


      /*----------------------------------------------------*/
      /*  testimonial Slider Two
      /*----------------------------------------------------*/
      function testimonial_two() {
        if ($('.testimonial_slider_two').length) {
          $('.testimonial_slider_two').owlCarousel({
            loop: true,
            margin: 30,
            items: 3,
            nav: false,
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              800: {
                items: 2,
              },
              1060: {
                items: 3,
              }
            }
          });
        }
      }
      testimonial_two();

      /*----------------------------------------------------*/
      /*  Gallery Slider
      /*----------------------------------------------------*/
      function client_slider() {
        if ($('.client_slider').length) {
          $('.client_slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 6,
            nav: false,
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
              },
              480: {
                items: 2,
              },
              600: {
                items: 4,
              },
              992: {
                items: 6,
              }
            }
          });
        }
      }
      client_slider();
    });

  }

}
