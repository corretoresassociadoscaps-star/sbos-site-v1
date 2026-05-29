const SBOS = {
  basePath: '/sbos-site-v1',
  whatsapp: '5573986663280',
  phone: '+55 (73) 98666-3280',
  email: 'corretoresassociados.caps@gmail.com',
  developmentUrl: '/sbos-site-v1/imoveis/em-construcao.html'
};

function withBase(path) {
  if (!path || path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) return path;
  if (path.startsWith(SBOS.basePath)) return path;
  if (path === '/') return `${SBOS.basePath}/`;
  return `${SBOS.basePath}${path.startsWith('/') ? path : `/${path}`}`;
}

function initNavigation() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function initSmartSearch() {
  const form = document.querySelector('[data-smart-search]');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    window.location.href = SBOS.developmentUrl;
  });
}

function initDataActions() {
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    link.href = `https://wa.me/${SBOS.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de falar com um consultor Sales & Berbert.')}`;
    link.target = '_blank';
    link.rel = 'noopener';
  });
  document.querySelectorAll('[data-client-area]').forEach(link => { link.href = `${SBOS.basePath}/cliente/`; });
  document.querySelectorAll('[data-broker-area]').forEach(link => { link.href = `${SBOS.basePath}/corretor/`; });
}

function initGithubPagesLinks() {
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.setAttribute('href', withBase(link.getAttribute('href')));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initGithubPagesLinks();
  initNavigation();
  initSmartSearch();
  initDataActions();
});
