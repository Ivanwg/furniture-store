import Choices from 'choices.js';


export function customSelect() {
  const elements = Array.from(document.querySelectorAll('.custom-select'));
  for (const element of elements) {
    const choices = new Choices(element, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: ''
    });
  }
}
