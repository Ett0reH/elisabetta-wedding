// Shared chrome: nav behavior, reveal, cursor, tweaks protocol
(function() {
  // Tweaks defaults (set per-page via window.TWEAKS before including this)
  const T = window.TWEAKS || { variant: 'editoriale', accent: 'rust', showCursor: false, wordmark: 'Elisabetta' };

  function apply() {
    document.documentElement.dataset.accent = T.accent;
    if (T.variant === 'minimal') {
      document.body.style.setProperty('--cream', '#f6f2ec');
      document.body.style.setProperty('--cream-pale', '#fbf8f3');
    } else if (T.variant === 'romantico') {
      document.body.style.setProperty('--cream', '#f0e3d4');
      document.body.style.setProperty('--cream-pale', '#f7ecdd');
    }
    const c = document.getElementById('cursor');
    if (c) c.style.display = T.showCursor ? '' : 'none';
    const w = document.getElementById('wordmark');
    if (w && T.wordmark) w.textContent = T.wordmark;
  }
  apply();

  // Nav scroll
  const nav = document.getElementById('nav');
  if (nav) window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 60);
  }, { passive: true });

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('is-in'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Cursor
  const cursor = document.getElementById('cursor');
  if (cursor && T.showCursor) {
    let tx = 0, ty = 0, cx = 0, cy = 0;
    window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
    (function raf() {
      cx += (tx - cx) * 0.22; cy += (ty - cy) * 0.22;
      cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px';
      requestAnimationFrame(raf);
    })();
    document.querySelectorAll('[data-hover], a, button').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });
  }

  // Simple form handler
  const form = document.getElementById('form');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim().split(' ')[0] || 'voi';
    const wrap = document.getElementById('formWrap');
    wrap.innerHTML = `
      <div class="sent">
        <div style="font-family:var(--ff-mono); font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--ink-mute); margin-bottom:16px;">Richiesta ricevuta · N° ${Math.floor(Math.random()*900+100)}</div>
        Grazie <em>${name}</em>.<br/>
        Vi scriver&ograve; entro 48 ore<br/>con le prime idee.
      </div>`;
  });
})();
