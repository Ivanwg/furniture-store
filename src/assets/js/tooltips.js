import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';



export function setTooltips() {
  const span = document.getElementById('tooltip1');
  const contentForTippy = `<span>Реплицированные с зарубежных<br>источников, исследования<br>формируют глобальную сеть.<span>`;
  tippy(span, {
    content: contentForTippy,
    allowHTML: true,
    interactiveBorder: 15,
    theme: 'custom',
  });
}
