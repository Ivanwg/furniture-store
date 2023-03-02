


export function toDetailPage() {
  const btn = document.getElementById('D-31');
  btn.addEventListener('click', e => {
    const href = window.location.href;
    window.history.replaceState({}, 'good', '/good.html');
      window.location.reload();
    })
}
