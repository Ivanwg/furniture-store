import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';


export function createSpecialGoodsSwiper() {
  const swiper = new Swiper('.special-goods', {
    modules: [ Navigation, Pagination, Autoplay ],
    speed: 800,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    direction: 'horizontal',
    // loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // }
    navigation: {
      nextEl: '.special-goods__next',
      prevEl: '.special-goods__prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 1
      },
      1281: {
        slidesPerView: 'auto',
        slidesPerGroup: 3
      }
    },
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

export function createUsefulSwiper() {
  const swiper2 = new Swiper('.useful__swiper', {
    modules: [ Navigation, Autoplay ],
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 32,
    direction: 'horizontal',
    navigation: {
      nextEl: '.useful__next',
      prevEl: '.useful__prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 32
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32
      },
      1281: {
        slidesPerView: 2,
        spaceBetween: 32,
      }
    },
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

export function createSimilarSwiper() {
  const swiper3 = new Swiper('.similar__swiper', {
    modules: [ Navigation, Autoplay ],
    speed: 800,
    slidesPerView: 2,
    spaceBetween: 16,
    direction: 'horizontal',
    navigation: {
      nextEl: '.similar__next',
      prevEl: '.similar__prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 32,
      }
    },
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


export function createDetailImgSwiper() {
  const swiper = new Swiper('.good__swiper_bottom', {
    modules: [ Navigation, Autoplay ],
    spaceBetween: 38,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    loop: false,
    allowTouchMove: true,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
        // allowTouchMove: false,
        direction: 'vertical',
      },
      1024: {
        slidesPerView: 4,
        allowTouchMove: true,
        spaceBetween: 38,
        direction: 'horizontal',
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 38,
        // allowTouchMove: false,
        direction: 'horizontal',
      }
    },
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
  const swiper2 = new Swiper('.good__swiper_top', {
    modules: [ Thumbs ],
    spaceBetween: 10,
    allowTouchMove: false,
    loop: true,
    thumbs: {
      swiper: swiper
    },
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

export function createDetailImgModalSwiper() {
  const swiper = new Swiper('.modal-swiper__swiper_bottom', {
    modules: [ Navigation, Autoplay ],
    spaceBetween: 38,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    loop: false,
    allowTouchMove: true,
    navigation: {
      nextEl: ".modal-swiper__next",
      prevEl: ".modal-swiper__prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 78,
        // allowTouchMove: false,
        allowTouchMove: true,
        direction: 'horizontal',
      },
      1024: {
        slidesPerView: 3,
        allowTouchMove: true,
        spaceBetween: 78,
        direction: 'horizontal',
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 55,
        // allowTouchMove: false,
        allowTouchMove: true,
        direction: 'horizontal',
      }
    },
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
  const swiper2 = new Swiper('.modal-swiper__swiper_top', {
    modules: [ Thumbs ],
    spaceBetween: 10,
    allowTouchMove: true,
    loop: true,
    thumbs: {
      swiper: swiper
    },
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



