(function ($) {
  "use strict";

  $.fn.andSelf = function () {
    return this.addBack.apply(this, arguments);
  }

  /* Loader Code Start */
  $(window).on("load", function () {
    $(".section-loader").fadeOut("slow");
  });

  /* Mobile Nav Trigger */
  var trigger = $('.navbar-toggler'),
    overlay = $('.overlay'),
    navc = $('.navbar-collapse'),
    active = false;


  $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
    $('.navbar-toggler').toggleClass('active')
    overlay.toggleClass('active');
    navc.toggleClass('active');
  });

  /* Onepage Nav */
  $('#mh-header').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
  });

  /* WOW ANIMATION */
  var wow = new WOW({
    mobile: true
  });
  wow.init();


  /* NAV FIXED ON SCROLL */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".nav-scroll").addClass("nav-strict");
    } else {
      $(".nav-scroll").removeClass("nav-strict");
    }
  });

}(jQuery));
