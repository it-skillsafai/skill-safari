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


$(document).ready(function () {
  $('.project').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});


$('form').on('submit', function () {
  localStorage.setItem('visited', new Date().toUTCString())
  swal({
    title: "Thank you!",
    text: "Your details has been submitted successfully",
    icon: "success",
    timer: 5000,
    buttons: false,
  });
});

if (!localStorage.getItem("visited")) {
  setTimeout(function () {
    $('#learn').modal();
  }, 5000);
}

// setTimeout(function () {
//   $('#learn').modal();
// }, 10000);

// function getCookie(name) {
//   let result = "";
//   const cookieString = document.cookie;
//   if (cookieString) {
//     const cookies = cookieString.split(";");
//     cookies.forEach((cookie) => {
//       const cookiePair = cookie.split("=", 2);
//       const cookieName = cookiePair[0].trim();
//       if (cookieName === name) {
//         const cookieVal = cookiePair[1];
//         result = cookieVal;
//       }
//     });
//   }
//   return result;
// }
// getCookie("visited");