$(window).on('scroll', function () {
  if ($(window).scrollTop() > 500) {
    $('.navbar').addClass('active');
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $('.navbar').removeClass('active');
  }
});

// Slick

$('.project-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  fade: true,
  draggable: true,
  speed: 300,
  infinite: true,
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$('.change_case').click(function () {
  $('i', this).toggleClass('fa-plus-circle fa-minus-circle');
});

$('.toggle_case').click(function () {
  $('i', this).toggleClass('fa-angle-double-down fa-angle-double-up');
});

$('.circulum').click(function () {
  $('i', this).toggleClass('fa-plus fa-minus');
});
