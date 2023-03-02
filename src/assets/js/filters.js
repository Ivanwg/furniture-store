import {gsap} from 'gsap';


export function filtersListen() {
  const filtersArr = Array.from(document.querySelectorAll('.filters__item'));

  filtersArr.forEach(elem => {
    elem.addEventListener('click', e => {
      const mediaMobile = window.matchMedia('(max-width: 1281px)');
      if (!mediaMobile.matches) {
        elem.classList.remove('filters__item_active');
        return;
      }
      elem.classList.toggle('filters__item_active');
    })
  })
}
