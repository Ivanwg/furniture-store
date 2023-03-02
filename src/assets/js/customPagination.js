import { gsap } from "gsap";

function getCardsCount() {
  const media1024 = window.matchMedia('(max-width: 1024px)');
  const media768 = window.matchMedia('(max-width: 768px)');
  const media1281 = window.matchMedia('(max-width: 1281px)');
  let count = 9;
  if (media1024.matches) {
    count = 6;
  }
  return count;
}

function elemsList() {
  const hrUl = document.getElementById('catalog-list');
  const cards = Array.from(hrUl.children);
  return cards;
}

function openCards(list, amount, fn=false) {
  const catalogAnimation = gsap.timeline({paused: true});

    list.slice(0, amount).forEach(el => {
      el.classList.remove('disabled');
      if (fn) {
        catalogAnimation.fromTo(el, {opacity: 0}, {opacity: 1, duration: .2, delay: 0, ease: "power2.out"})
      }
    });
    catalogAnimation.play();
}

function paginate() {
  const cardsToOpen = elemsList();
  const count = getCardsCount();
  const btnsWrap = document.getElementById('pagination__btns-wrap');
  btnsWrap.innerHTML = '';
  const btnsCount = Math.ceil(cardsToOpen.length / count);

  for (let i = 1; i < btnsCount + 1; i++) {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'pagination__btn');
    i == 1 && btn.classList.add('pagination__btn_active');
    btn.textContent = `${i}`;
    btn.addEventListener('click', e => {
      e.preventDefault();
      onPaginationClick(btn);
    })
    btnsWrap.append(btn);
  }

  for (const elemLi of cardsToOpen) {
    elemLi.classList.add('disabled');
  }

  openCards(cardsToOpen, count);
}

export function paginateCards() {
  paginate();
  window.addEventListener('resize', (e) => {
    paginate();
  });
}

function onPaginationClick(btn) {
  const activeBtn = document.querySelector('.pagination__btn_active');
  if (activeBtn.textContent == btn.textContent) {
    return;
  }
  else {
    activeBtn.classList.remove('pagination__btn_active');
    btn.classList.add('pagination__btn_active');
    const hiddenList = getHiddenElemsList();
    const unhiddenList = getUnhiddenElemsList();
    const count = getCardsCount();
    let cardsToOpen;
    if (btn.textContent == '1') {
      cardsToOpen = hiddenList.slice(0, count)
    } else if (btn.textContent == '2') {
      activeBtn.textContent == '1' ? cardsToOpen = hiddenList.slice(0, count) : cardsToOpen = hiddenList.slice(count, count * 2 + 1);
    } else if (btn.textContent == '3') {
      cardsToOpen = hiddenList.slice(count, count * 2 + 1);
    }
    for (const elemLi of unhiddenList) {
      elemLi.classList.add('disabled');
    }
    openCards(cardsToOpen, count, true);
  }
}

function getHiddenElemsList() {
  const cards = elemsList();
  const filteredList = cards.filter(elem => elem.classList.contains('disabled'));
  return filteredList;
}

function getUnhiddenElemsList() {
  const cards = elemsList();
  const filteredList = cards.filter(elem => !elem.classList.contains('disabled'));
  return filteredList;
}
