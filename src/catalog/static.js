import {headerListen} from '../assets/js/header';
import {createPriceSlider} from './price';
import {paginateCards} from '../assets/js/customPagination';
import {filtersListen} from '../assets/js/filters'
import {toDetailPage} from '../assets/js/toDeatailPage';
import {maskTelInputs, onSubmit} from '../assets/js/form';


paginateCards();
headerListen();
filtersListen();
createPriceSlider();
toDetailPage();
maskTelInputs('buy-tel');
onSubmit({sumbitBtnId: 'buy-submit', checkboxId: 'buy-checkbox', formId: 'buy-form', nameId: 'buy-name', telId: 'buy-tel', mailId: ''});





