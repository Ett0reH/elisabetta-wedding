// Renders the shared nav + footer into [data-nav] and [data-foot] slots.
(function(){
  const here = (location.pathname.split('/').pop() || '').toLowerCase();
  function active(href) {
    const h = href.toLowerCase();
    if (here === h) return ' class="is-active"';
    if ((here === '' || here === 'index.html') && h === 'index.html') return ' class="is-active"';
    return '';
  }
  const HOME = 'index.html';

  const navHTML = `
    <nav class="nav" id="nav">
      <a href="${HOME}" class="nav__mark" data-hover>
        <span id="wordmark">Elisabetta</span><sup>Wedding Planner · Est. 2014</sup>
      </a>
      <ul class="nav__links">
        <li><a href="portfolio.html"${active('portfolio.html')} data-hover>Weddings</a></li>
        <li><a href="location.html"${active('location.html')} data-hover>Venues</a></li>
        <li><a href="servizi.html"${active('servizi.html')} data-hover>Approach</a></li>
        <li><a href="about.html"${active('about.html')} data-hover>Studio</a></li>
        <li><a href="contatti.html"${active('contatti.html')} data-hover>Contact</a></li>
      </ul>
      <a href="contatti.html" class="nav__cta" data-hover>Enquire now</a>
    </nav>`;

  const footHTML = `
    <footer class="foot">
      <div class="foot__top">
        <div>
          <div class="foot__mark"><span>E</span>lisabetta<br/><em class="italic" style="font-size:22px; color:rgba(244,237,228,0.6)">— wedding studio, florence</em></div>
        </div>
        <div>
          <h4>Studio</h4>
          <ul>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="location.html">Venues</a></li>
            <li><a href="servizi.html">Approach</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:studio@elisabetta.it">studio@elisabetta.it</a></li>
            <li><a href="contatti.html">+39 345 284 19 06</a></li>
            <li><a href="contatti.html">Florence, Italy</a></li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Vogue Weddings</a></li>
          </ul>
        </div>
      </div>
      <div class="foot__bot">
        <span>© 2026 Studio Elisabetta — VAT 0458 1120 482</span>
        <span>Site · N° 002.4 — Spring Edition</span>
      </div>
    </footer>`;

  const ns = document.querySelector('[data-nav]');
  if (ns) ns.outerHTML = navHTML;
  const fs = document.querySelector('[data-foot]');
  if (fs) fs.outerHTML = footHTML;
})();
