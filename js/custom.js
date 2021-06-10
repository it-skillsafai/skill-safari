(function ($) {
    "use strict";

    ///////////////// fixed menu on scroll for desktop
if ($(window).width() > 992) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 40) {
          $('#navbar_top').addClass("fixed-top");
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('#navbar_top').removeClass("fixed-top");
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
    var bannerSlider = $(".banner_part");
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
            animateOut: "slideOutLeft",
            animateIn: "slideInRight",
            responsive: {
                0: {
                    nav: false
                },
                768: {
                    nav: true
                }
            },
        });
    }

    //popular courses js
    var popular_courses = $(".popular_courses_item");
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
                    items: 1
                },
                600: {
                    items: 2
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }

        });
    }
    //popular courses js
    var student_review = $(".student_review_iner");
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
            navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"]

        });
    }

    //popular courses js
    var course_category = $(".course_category_item");
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
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }


    //event time countdown

    $(document).ready(function () {
        function eventTimer() {
            var endTime = new Date("1 March 2020 9:56:00 GMT+01:00");
            endTime = (Date.parse(endTime) / 1000);
            var now = new Date();
            now = (Date.parse(now) / 1000);
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400);
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") {
                hours = "0" + hours;
            }
            if (minutes < "10") {
                minutes = "0" + minutes;
            }
            if (seconds < "10") {
                seconds = "0" + seconds;
            }

            $("#eventdays").html(days + "<span>Days</span>");
            $("#eventhours").html(hours + "<span>Hours</span>");
            $("#eventminutes").html(minutes + "<span>Minutes</span>");
            $("#eventseconds").html(seconds + "<span>Seconds</span>");
        }
        setInterval(function () {
            eventTimer();
        }, 1000);
    });

    // Preloader js
    AOS.init({
        once: true,
        disable: function () {
            var maxWidth = 768;
            return window.innerWidth < maxWidth;
        }
    })

    // Preloader js
    $(window).on('load', function () {
        $(".preloder_part").fadeOut();
        $(".spinner").delay(500).fadeOut("slow");
    });

}(jQuery));