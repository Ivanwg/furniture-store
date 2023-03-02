import { openModal } from "./modalEvents";



export function listenToBuyItem(btnClassName) {
  const btnsArr = Array.from(document.querySelectorAll(`.${btnClassName}`));
  for (const btn of btnsArr) {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal({modalId: 'modal-form', blockId: 'modal-form-block'});
    });
  }
}

export function listenToWatchImgs(imgWrapClassName) {
  const imgsArr = document.querySelectorAll(`.${imgWrapClassName}`);
  for (const img of imgsArr) {
    img.addEventListener('click', e => {
      openModal({modalId: 'modal-swiper', blockId: 'modal-swiper-block'});
    });
  }
}
