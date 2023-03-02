import Swiper, { Pagination, Autoplay } from 'swiper';


export function createBannerSwiper() {
  const swiper = new Swiper('.banner__swiper', {
    modules: [ Pagination, Autoplay ],
    speed: 800,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.banner__pagination',
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },


    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          const links = slide.querySelectorAll('a');
          const btns = slide.querySelectorAll('button');
          const interactive = [...links, ...btns];

          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
            interactive.forEach(el => {
              el.tabIndex = "-1";
            });
          } else {
            slide.removeAttribute('tabindex');
            interactive.forEach(el => {
              el.removeAttribute('tabindex');
            });
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          const links = slide.querySelectorAll('a');
          const btns = slide.querySelectorAll('button');
          const interactive = [...links, ...btns];

          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
            interactive.forEach(el => {
              el.tabIndex = "-1";
            });
          } else {
            slide.removeAttribute('tabindex');
            interactive.forEach(el => {
              el.removeAttribute('tabindex');
            });
          }
        });
      }
    }

  });
}
