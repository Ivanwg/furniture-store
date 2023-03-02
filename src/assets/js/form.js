import Inputmask from "inputmask";
import JustValidate from 'just-validate';
import {openModal, modalAnimationReverse} from './modalEvents';


export function maskTelInputs(id) {
  const selector = document.getElementById(id);
  const im = new Inputmask("+7 (999) 999 99 99");
  im.mask(selector);
}

export function onSubmit({sumbitBtnId, checkboxId, formId, nameId, telId, mailId}) {
  const sumbitBtn = document.getElementById(sumbitBtnId);
  const checkbox = document.getElementById(checkboxId);
  const form = document.getElementById(formId);
  checkbox.addEventListener('change', e => {
    if (checkbox.checked) {
      sumbitBtn.classList.remove('button-disabled');
    } else {
      sumbitBtn.classList.add('button-disabled');
    }
  });
  const validate = new JustValidate(`#${formId}`);
  validate
  .addField(`#${nameId}`, [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Слишком короткое',
    },
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
  ])
  .addField(`#${telId}`, [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      rule: 'minLength',
      value: 18,
      errorMessage: 'Слишком короткое',
    },
  ]);
  mailId && validate
  .addField(`#${mailId}`, [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      rule: 'email',
      errorMessage: 'Некорректный формат',
    },
  ])
  form.addEventListener('submit', e => {
    if (validate.isValid && checkbox.checked) {
      e.preventDefault();
      const formModal = document.getElementById('modal-form');
      const formModalBlock = document.getElementById('modal-form-block');
      modalAnimationReverse(formModal, formModalBlock);
      openModal({modalId: 'modal-thanks', blockId: 'modal-thanks-block'});
    } else {
      return
    }
  })
}
