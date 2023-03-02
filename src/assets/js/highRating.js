import { gsap } from "gsap";


function getCountAndRows() {
  const media1024 = window.matchMedia('(max-width: 1024px)');
  const media768 = window.matchMedia('(max-width: 768px)');
  const media1281 = window.matchMedia('(max-width: 1281px)');
  let countToShowInRow = 4;
  let rowsCount = 2;

  if (media1281.matches) {
    countToShowInRow = 3;
    rowsCount = 2;
  }
  if (media1024.matches) {
    countToShowInRow = 2;
    rowsCount = 3;
  }

  return {count: countToShowInRow, rows: rowsCount}
}

function elemsList() {
  const hrUl = document.getElementById('hr-list');
  const cards = Array.from(hrUl.children);
  return cards;
}

function getHiddenElemsList() {
  const cards = elemsList();
  const filteredList = cards.filter(elem => elem.classList.contains('disabled'));
  return filteredList;
}

function openCards(list, amount, fn=false) {
const hrAnimation = gsap.timeline({paused: true});

  list.slice(0, amount).forEach(el => {
    el.classList.remove('disabled');
    if (fn) {
      hrAnimation.fromTo(el, {opacity: 0}, {opacity: 1, duration: .2, delay: 0, ease: "power2.out"})
    }
  });
  hrAnimation.play();
}

function getUnhiddenElemsList() {
  const cards = elemsList();
  const filteredList = cards.filter(elem => !elem.classList.contains('disabled'));
  return filteredList;
}

export function hideOpenDefaultHRCards() {
  const cardsToOpen = elemsList();
  const data = getCountAndRows();
  let countToShowInRow = data.count;
  let rowsCount = data.rows;
  for (const elemLi of cardsToOpen) {
    elemLi.classList.add('disabled');
  }

  openCards(cardsToOpen, countToShowInRow * rowsCount);
}


export function openHighRatingCards() {
  const openHignRatingBtn = document.getElementById('hr-btn');
  openHignRatingBtn.addEventListener('click', e => {
    e.preventDefault();
    const cardsToOpen = getHiddenElemsList();
    const data = getCountAndRows();
    const countToShowInRow = data.count;
    openCards(cardsToOpen, countToShowInRow, true);
    const updatedHiddenListCount = getHiddenElemsList().length;
    if (updatedHiddenListCount < 1) {
      openHignRatingBtn.parentElement.classList.add('disabled');
    }
  });
  window.addEventListener('resize', (e) => {
    hideOpenDefaultHRCards();
  });
}




