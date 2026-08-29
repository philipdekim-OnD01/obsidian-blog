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

  const defaultApiBase = 'https://obsidian-blog-visitor-counter.navigation01.workers.dev';
  const apiBase = (window.VISITOR_API_BASE_URL || defaultApiBase).replace(/\/$/, '');
  if (!apiBase || apiBase.includes('YOUR_WORKERS_SUBDOMAIN')) {
    return;
  }

  fetch(`${apiBase}/visit`, { cache: 'no-store' }).catch(() => {
    // Analytics must not interfere with article rendering.
  });
})();
