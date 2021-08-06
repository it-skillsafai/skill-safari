(function ($) {
  'use strict';

  ///////////////// fixed menu on scroll for desktop
  if ($(window).width() > 992) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 40) {
        $('#navbar_top').addClass('fixed-top');
        // add padding top to show content behind navbar
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      } else {
        $('#navbar_top').removeClass('fixed-top');
        // remove padding top from body
        $('body').css('padding-top', '0');
      }
    });
  } // end if

  //counter js
  var time = $('.timer');
  if (time.length > 0) {
    time.countTo();
  }

  //banner slider js
  var bannerSlider = $('.banner_part');
  if (bannerSlider.length) {
    bannerSlider.owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 500,
      animateOut: 'slideOutLeft',
      animateIn: 'slideInRight',
      responsive: {
        0: {
          nav: false,
        },
        768: {
          nav: true,
        },
      },
    });
  }

  //popular courses js
  var popular_courses = $('.popular_courses_item');
  if (popular_courses.length) {
    popular_courses.owlCarousel({
      items: 3,
      loop: true,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dotsSpeed: 300,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        991: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }
  //popular courses js
  var student_review = $('.student_review_iner');
  if (student_review.length) {
    student_review.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 500,
      dots: false,
      navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
    });
  }

  //popular courses js
  var course_category = $('.course_category_item');
  if (course_category.length) {
    course_category.owlCarousel({
      items: 4,
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      autoplay: true,
      smartSpeed: 300,
      dotsSpeed: 300,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        991: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
})(jQuery);
