import noUiSlider from 'nouislider';

export function createPriceSlider() {

  const html5Slider = document.getElementById('slider');

  noUiSlider.create(html5Slider, {
      start: [2000, 150000],
      connect: true,
      step: 1,
      range: {
          'min': 0,
          'max': 200000
      }
  });
  const inputFrom = document.getElementById('price-from');
  const inputTo = document.getElementById('price-to');

  html5Slider.noUiSlider.on('update', function (values, handle) {

      const value = values[handle];

      if (handle) {
        inputTo.value = Math.round(value);
      }
      else {
        inputFrom.value = Math.round(value);
      }
  });

  inputTo.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
  });
  inputTo.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
  });
}

