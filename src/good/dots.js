export function fillWithDots() {
  const spansFillersArr = Array.from(document.querySelectorAll('.good-features__filler'));
  let text = '';
  for (let i = 0; i < 200; i++) {
    text += '.'
  }
  spansFillersArr.forEach(el => {
    el.textContent = text;
  });
  checkMedia()

  window.addEventListener('resize', (e) => {
    checkMedia();
  });


}

function checkMedia() {
  const mediaQuery = window.matchMedia('(min-width: 1281px)');
  if (mediaQuery.matches) {
    const maxWidth = document.querySelector('.good__block').offsetWidth;
    const spansValuesArr = Array.from(document.querySelectorAll('.good-features__value'));
    spansValuesArr.forEach(el => {
      el.setAttribute('style', `width: ${Math.ceil((maxWidth - 32) / 2)}px`)
    });
  }
}
