// Highlight the nav link of the section currently in view.
(function () {
  const links = Array.from(document.querySelectorAll('.site-nav nav a'));
  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute('href');
    if (id && id.startsWith('#')) {
      const sec = document.querySelector(id);
      if (sec) map.set(sec, a);
    }
  });

  const setActive = (active) => {
    links.forEach((a) => a.classList.toggle('active', a === active));
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const a = map.get(entry.target);
          if (a) setActive(a);
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  map.forEach((_, sec) => io.observe(sec));
})();

// Lightweight image lightbox: click any figure image to open a full-screen view.
(function () {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(10,15,25,.88);
    display: none; align-items: center; justify-content: center;
    z-index: 100; cursor: zoom-out; padding: 2rem;
  `;
  const img = document.createElement('img');
  img.style.cssText = 'max-width: 100%; max-height: 100%; box-shadow: 0 20px 60px rgba(0,0,0,.5); border-radius: 8px;';
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => { overlay.style.display = 'none'; });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.style.display = 'none';
  });

  document.querySelectorAll('figure img').forEach((el) => {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', () => {
      img.src = el.src;
      overlay.style.display = 'flex';
    });
  });
})();
