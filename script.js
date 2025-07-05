onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// script.js
onload = () => {
  const audio = document.getElementById('bg-music');
  const ph = document.querySelector('.picture-placeholder');

  document.body.addEventListener('click', () => {
    // 1) start bloom & audio together
    document.body.classList.remove('not-loaded');
    audio.play().catch(() => {});

    // 2) reveal/scrol­l filmstrip after ~6s
    setTimeout(() => ph.classList.add('show'), 6000);
  }, { once: true });
};
