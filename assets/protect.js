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
