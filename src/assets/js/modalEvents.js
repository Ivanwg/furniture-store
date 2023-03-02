import { gsap } from "gsap";


function modalAnimate(modal, block) {
  const modalAnimation = gsap.timeline({paused: true});
  modalAnimation.fromTo(modal, {display: 'none', opacity: 0}, {display: 'flex', opacity: 1, duration: .3, delay: 0, ease: "power2.out"})
                .fromTo(block, {transform: 'translateY(-20%)', opacity: 0}, {transform: 'none', opacity: 1, duration: .2, delay: 0, ease: "power2.out"}, "-=.1")

  return modalAnimation;
}

function modalAnimationPlay(modal, block) {
  const modalAnimation = modalAnimate(modal, block);
  modalAnimation.play();
}

export function modalAnimationReverse(modal, block) {
  const modalAnimation = modalAnimate(modal, block);
  modalAnimation.reverse();
}

export function openModal({modalId, blockId}) {
  const modal = document.getElementById(modalId);
  const modalBlock = document.getElementById(blockId);
  modalAnimationPlay(modal, modalBlock);
}

export function listenCloseModal({btnId, modalId, blockId}) {
  const btn = document.getElementById(btnId);
  const modal = document.getElementById(modalId);
  const modalBlock = document.getElementById(blockId);
  btn.addEventListener('click', e => {
    e.preventDefault();
    modalAnimationReverse(modal, modalBlock);
  });
  modalBlock.addEventListener('click', e => {
    e._isClicked = true;
  });
  body.addEventListener('click', e => {
    !e._isClicked && modalAnimationReverse(modal, modalBlock);
  });
}


