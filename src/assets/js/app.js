//masked inputs
$(() => {
  Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');
});

// // tabs
// document.addEventListener('DOMContentLoaded', function () {
//   const tabsBtn = document.querySelectorAll('.tabs__btn');
//   tabsBtn.forEach(function (el) {
//     el.addEventListener('click', function (event) {
//       tabsBtn.forEach(tabsBtn => {
//         tabsBtn.classList.remove('is-active');
//       });
//       const path = event.currentTarget.dataset.path;
//       document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
//         tabContent.classList.remove('is-active');
//       });
//       document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
//       el.classList.add('is-active');
//     });
//   });
// });
//
//
// // mobile menu
// $(() => {
//   const btnMenu = document.querySelectorAll('.js-open-mobile-menu');
//   const menu = document.querySelector('.js-mobile-menu');
//   const body = document.querySelector('body');
//   btnMenu.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//       e.stopPropagation();
//       menu.classList.add('is-open');
//       body.classList.add('opened-menu')
//     });
//   })
//   const closeBtn = document.querySelector('.js-close-mobile-menu');
//   closeBtn.addEventListener('click', function (e) {
//     e.stopPropagation();
//     menu.classList.remove('is-open');
//     body.classList.remove('opened-menu')
//   });
// });
//
//

//enabled submit

$(document).ready(function () {

  $('.js-form-submit').prop('disabled', false);

  $('.js-enabled-submit').change(function () {
    $(this)
      .parents('form')
      .find('.js-form-submit').prop('disabled', function (i, val) {
      return !val;
    })
    // $('.js-form-submit').prop('disabled', function (i, val) {
    //     return !val;
    // })
  });
})

// up button
$(document).ready(function () {
  var buttonUp = $('.js-button-up');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      buttonUp.addClass('is-show');
    } else {
      buttonUp.removeClass('is-show');
    }
  });
  buttonUp.on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});


//sliders
$(() => {

  const rewSlider = new Swiper(".js-reviews-slider", {
    speed: 900,
    // initialSlide: 1,
    slidesPerView: 'auto',
    spaceBetween: 15,
    navigation: {
      nextEl: ".js-rev-slider-next",
      prevEl: ".js-rev-slider-prev",
    },
    pagination: {
      el: ".js-rev-slider-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      767: {
        slidesPerView: 1.8,

      },
      1023: {
        slidesPerView: 'auto',

      },
    },
  });


  const caseNavSlider = new Swiper(".js-case-nav-sld", {
    speed: 900,
    // initialSlide: 1,

    spaceBetween: 0,
    navigation: {
      nextEl: ".js-case-nav-next",
      prevEl: ".js-case-nav-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      768: {
        slidesPerView: 2,

      },
    },
  });

  const resMobSlider = new Swiper(".js-results-mobile-sld", {
    speed: 900,
    // initialSlide: 1,
    slidesPerView: 1,
    navigation: {
      nextEl: ".js-results-mobile-slider-next",
      prevEl: ".js-results-mobile-slider-prev",
    },
    pagination: {
      el: ".js-results-mobile-slider-pagination",
    },

  });
});

$(() => {
  const materialSlider = new Swiper(".js-materials-sld", {
    slidesPerView: "auto",
    spaceBetween: 15,
    speed: 400,
    observer: true,
    observeParents: true,
    slideToClickedSlide: true,
    initialSlide: 1,
    navigation: {
      nextEl: ".js-mat-slider-next",
      prevEl: ".js-mat-slider-prev",
    },
    pagination: {
      el: ".js-mat-slider-pagination",
    },
    on: {
      afterInit: function () {
        console.log("afterInit");
        setTimeout(() => {
          $(".materials__slide").addClass("wide");
          materialSlider.update(true);
        }, "500");
      },
      snapGridLengthChange: function () {
        if (this.snapGrid.length != this.slidesGrid.length) {
          this.snapGrid = this.slidesGrid.slice(0);
        }
      }
    }
  });

  const swiperSlides = document.querySelectorAll(".materials__slide");

  materialSlider.on("slideChangeTransitionStart", function (e) {
    swiperSlides.forEach(function (elem) {
      elem.classList.remove("wide");
    });
  });

  materialSlider.on("slideChangeTransitionEnd", function () {
    const linkElemCurrentSlide = swiperSlides[materialSlider.realIndex];
    linkElemCurrentSlide.classList.add("wide");
    materialSlider.update(true);
  });
});

//faq
$('.js-open-faq-text').click(function () {
  $(this).toggleClass('is-active');
  $(this).next('p').toggleClass('is-open')
})
