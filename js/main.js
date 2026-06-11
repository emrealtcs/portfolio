/**
 * Shared site utilities: navigation, footer, and helpers.
 */

/**
 * Renders the site navigation into #site-nav.
 * @param {'home'|'about'|'project'} activePage - Highlights the current section.
 */
function renderNavigation(activePage) {
  const navRoot = document.getElementById('site-nav');
  if (!navRoot) return;

  const homeActive = activePage === 'home' ? ' aria-current="page"' : '';
  const aboutActive = activePage === 'about' ? ' aria-current="page"' : '';

  const homePath = activePage === 'project' ? '../index.html' : 'index.html';
  const aboutPath = activePage === 'project' ? '../about.html' : 'about.html';

  navRoot.innerHTML = `
    <a class="nav-brand" href="${homePath}">Portfolio</a>
    <button
      type="button"
      class="nav-toggle"
      aria-expanded="false"
      aria-controls="nav-menu"
      aria-label="Toggle navigation menu"
    >
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
    </button>
    <ul id="nav-menu" class="nav-menu">
      <li><a href="${homePath}"${homeActive}>Home</a></li>
      <li><a href="${aboutPath}"${aboutActive}>About</a></li>
    </ul>
  `;

  initMobileNav(navRoot);
}

/**
 * Mobile menu toggle with keyboard support.
 * @param {HTMLElement} navRoot
 */
function initMobileNav(navRoot) {
  const toggle = navRoot.querySelector('.nav-toggle');
  const menu = navRoot.querySelector('#nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open', !expanded);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    });
  });
}

/**
 * Renders a consistent site footer.
 * @param {'home'|'about'|'project'} pageContext
 */
function renderFooter(pageContext) {
  const footerRoot = document.getElementById('site-footer');
  if (!footerRoot) return;

  const year = new Date().getFullYear();
  const aboutPath = pageContext === 'project' ? '../about.html' : 'about.html';

  footerRoot.innerHTML = `
    <p>&copy; ${year} Portfolio. <a href="${aboutPath}">Contact</a></p>
  `;
}

/**
 * Escapes HTML to prevent injection when inserting user-facing strings.
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Builds technology tag markup.
 * @param {string[]} technologies
 * @returns {string}
 */
function renderTechTags(technologies) {
  return technologies
    .map((tech) => `<li class="tag">${escapeHtml(tech)}</li>`)
    .join('');
}
