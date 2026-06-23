(() => {
  document.documentElement.classList.add('copy-guard');

  const block = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  ['copy', 'cut', 'contextmenu', 'dragstart', 'selectstart'].forEach((type) => {
    document.addEventListener(type, block, { capture: true });
  });
})();

(() => {
  // The home page tracks visits while loading the visible chart.
  if (document.getElementById('visitor-total')) {
    return;
  }

  const apiBase = 'https://api.counterapi.dev/v1';
  const namespace = 'philipkim-blog';
  fetch(`${apiBase}/${namespace}/home-total/up`, { cache: 'no-store' }).catch(() => {
    // Analytics must not interfere with article rendering.
  });
})();
