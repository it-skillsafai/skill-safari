$(window).on("scroll", function () {
  if ($(window).scrollTop() > 500) {
    $(".navbar").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".navbar").removeClass("active");
  }
});


// Slick

$('.project-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  draggable: false,
  asNavFor: '.thumbnail_slider',

});

$('.thumbnail_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.project-slider',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '60px',
  responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
      },
    },
  ],
});


$(function () {
  $('.tech-slide').slick({
    speed: 500,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 500,
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


$(function () {
  $('.comp-slider').slick({
    speed: 500,
    autoplay: true,
    autoplaySpeed: 500,
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


$('.change_case').click(function () {
  $("i", this).toggleClass("fa-plus-circle fa-minus-circle");
});

$('.toggle_case').click(function () {
  $("i", this).toggleClass("fa-angle-double-down fa-angle-double-up");
});


$('.circulum').click(function () {
  $("i", this).toggleClass("fa-plus fa-minus");
});