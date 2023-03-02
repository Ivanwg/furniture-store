import {headerListen} from '../assets/js/header';
import {fillWithDots} from './dots';
import {createSimilarSwiper, createDetailImgSwiper,createDetailImgModalSwiper} from '../assets/js/createCustomSwiper';
import {maskTelInputs, onSubmit} from '../assets/js/form';
import {listenCloseModal} from '../assets/js/modalEvents';
import {listenToBuyItem, listenToWatchImgs} from '../assets/js/good';


headerListen();
createDetailImgSwiper();
fillWithDots();
createSimilarSwiper();
createDetailImgModalSwiper();
maskTelInputs('buy-tel');
onSubmit({sumbitBtnId: 'buy-submit', checkboxId: 'buy-checkbox', formId: 'buy-form', nameId: 'buy-name', telId: 'buy-tel', mailId: ''});

listenCloseModal({btnId: 'modal-thanks__close', modalId: 'modal-thanks', blockId: 'modal-thanks-block'});
listenCloseModal({btnId: 'modal-form__close', modalId: 'modal-form', blockId: 'modal-form-block'});
listenCloseModal({btnId: 'modal-swiper__close', modalId: 'modal-swiper', blockId: 'modal-swiper-block'});
listenToBuyItem('good-name-options__btn_buy');
listenToWatchImgs('good__swiper_top');

