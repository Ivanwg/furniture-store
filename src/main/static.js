import { gsap } from "gsap";
import {headerListen} from '../assets/js/header';
import {createBannerSwiper} from '../assets/js/createBannerSwiper';
import {createSpecialGoodsSwiper, createUsefulSwiper} from '../assets/js/createCustomSwiper';
import {hideOpenDefaultHRCards, openHighRatingCards} from '../assets/js/highRating';
import {setTooltips} from '../assets/js/tooltips';
import {maskTelInputs, onSubmit} from '../assets/js/form';
import {toDetailPage} from '../assets/js/toDeatailPage';
import {listenCloseModal} from '../assets/js/modalEvents';

hideOpenDefaultHRCards();
headerListen();
createBannerSwiper();
createSpecialGoodsSwiper();
openHighRatingCards();
createUsefulSwiper();
setTooltips();
maskTelInputs('tel');
maskTelInputs('buy-tel');
onSubmit({sumbitBtnId: 'user-submit', checkboxId: 'checkbox', formId: 'user-form', nameId: 'name', telId: 'tel', mailId: 'mail'});
onSubmit({sumbitBtnId: 'buy-submit', checkboxId: 'buy-checkbox', formId: 'buy-form', nameId: 'buy-name', telId: 'buy-tel', mailId: ''});
toDetailPage();
listenCloseModal({btnId: 'modal-thanks__close', modalId: 'modal-thanks', blockId: 'modal-thanks-block'});


