import { regionsList } from './variables';
import { gsap } from "gsap";

export function headerListen() {
  const mediaMobile = window.matchMedia('(max-width: 1024px)');
  const cityBtn = document.getElementById('city');
  const regionsUl = document.getElementById('regions');
  const openCityIcon = document.getElementById('open-regions-svg');
  const regionELems = Array.from(document.querySelectorAll('.regions__btn'));
  const cityDisplayContainer = document.getElementById('city-value');
  let cityDefault = document.getElementById('city-default');
  const body = document.getElementById('body');

  const openCategoriesIcon = document.getElementById('open-categories-icon');
  const categoriesUl = document.getElementById('select-category-list');
  const openCategoriesBtn = document.getElementById('open-categories');
  const categoryELems = Array.from(document.querySelectorAll('.select-category__item'));
  const selectedCategory = document.getElementById('category');

  const searchIcon = document.getElementById('search-icon');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  const burgerOpenBtn = document.getElementById('burger-open');
  const burgerCloseBtn = document.getElementById('burger-close');
  const burgerUl = document.getElementById('burger-list');
  const burgerLinks = Array.from(document.querySelectorAll('.main-nav__link'));

  let regionsOpen = false;
  let categoriesOpen = false;
  let burgerOpen = false;

  const checkCityAnimation = gsap.timeline({paused: true});
  checkCityAnimation.to(openCityIcon, {transform: 'rotate(180deg)', duration: .2, delay: 0, ease: "power2.out"})
                    .fromTo(regionsUl, {display: 'none', opacity: 0}, {display: 'flex', opacity: 1, duration: .2, delay: 0, ease: "power2.out"}, "-=.2")

  const checkCategoryAnimation = gsap.timeline({paused: true});
  checkCategoryAnimation.to(openCategoriesIcon, {transform: 'rotate(180deg)', duration: .2, delay: 0, ease: "power2.out"})
                    .fromTo(categoriesUl, {display: 'none', opacity: 0}, {display: 'grid', opacity: 1, duration: .2, delay: 0, ease: "power2.out"}, "-=.2")

  const burgerAnimation = gsap.timeline({paused: true});
  burgerAnimation.to(burgerUl, {display: 'block', opacity: 1, transform: 'translateX(0)', duration: .2, delay: 0, ease: "power2.out"})
  .fromTo(burgerCloseBtn, {display: 'none', opacity: 0, transform: 'translateX(-170%)'}, {display: 'block', opacity: 1, transform: 'translateX(0)', duration: .2, delay: 0, ease: "power2.out"}, "-=.2")


  function burgerAnimationPlay() {
    if (mediaMobile.matches) {
      burgerAnimation.play();
    }
  }

  function burgerAnimationReverse() {
    if (mediaMobile.matches) {
      burgerAnimation.reverse();
    }
  }

  function categoryAnimationReverse() {
    checkCategoryAnimation.reverse();
    // openCategoriesBtn.classList.remove('not-border-color');
  }

  cityBtn.addEventListener('click', e => {
    e.preventDefault();
    e._isClicked = true;
    // cityBtn.classList.add('bgc-transparent');
    burgerAnimationReverse();
    regionsOpen = !regionsOpen;
    regionsOpen ? checkCityAnimation.play() : checkCityAnimation.reverse();
  });

  for (const optionalCityBtn of regionELems) {
    optionalCityBtn.addEventListener('click', e => {
      e.preventDefault();
      e._isClicked = true;
      cityDefault.removeAttribute('id');
      cityDefault.parentElement.classList.remove('disabled');
      cityDefault = optionalCityBtn;
      const newValue = optionalCityBtn.textContent;
      cityDisplayContainer.textContent = newValue;
      regionsOpen = !regionsOpen;
      checkCityAnimation.reverse();
      optionalCityBtn.parentElement.classList.add('disabled');
    })
  }

  regionsUl.addEventListener('click', e => {
    e._isClicked = true;
  })

  openCategoriesBtn.addEventListener('click', e => {
    e.preventDefault();
    e._isClicked = true;
    burgerAnimationReverse();
    categoriesOpen = !categoriesOpen;
    if (categoriesOpen) {
      checkCategoryAnimation.play();
      // openCategoriesBtn.classList.add('not-border-color');
    } else {
      categoryAnimationReverse();
    }
  })

  for (const optionalCategoryBtn of categoryELems) {
    optionalCategoryBtn.addEventListener('click', e => {
      e.preventDefault();
      e._isClicked = true;
      selectedCategory.textContent = optionalCategoryBtn.textContent;
      categoriesOpen = !categoriesOpen;
      categoryAnimationReverse();
    })
  }

  categoriesUl.addEventListener('click', e => {
    e._isClicked = true;
  })

  searchInput.addEventListener('input', e => {
    if (searchInput.value != '') {
      searchIcon.classList.add('in-search-svg');
    }
    else {
      searchIcon.classList.remove('in-search-svg');
    }
  })

  searchInput.addEventListener('blur', e => {
    searchIcon.classList.remove('in-search-svg');
  })

  searchInput.addEventListener(('focus'), e => {
    if (searchInput.value.trim() != '') {
      searchIcon.classList.add('in-search-svg');
    }
    else {
      searchIcon.classList.remove('in-search-svg');
    }
  })

  burgerOpenBtn.addEventListener('click', e => {
    e.preventDefault();
    e._isClicked = true;
    burgerAnimationPlay();
  })

  burgerCloseBtn.addEventListener('click', e => {
    e.preventDefault();
    e._isClicked = true;
    burgerAnimationReverse();
  })

  burgerUl.addEventListener('click', e => {
    e._isClicked = true;
  })

  for (const burgerLink of burgerLinks) {
    burgerLink.addEventListener('click', e => {
      e._isClicked = true;
      burgerAnimationReverse();
    })
  }

  body.addEventListener('click', e => {
    if (!e._isClicked) {
      regionsOpen = false;
      categoriesOpen = false;
      burgerAnimationReverse();
      checkCityAnimation.reverse();
      categoryAnimationReverse();
    }
  });


}

