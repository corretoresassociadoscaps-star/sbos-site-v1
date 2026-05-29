const SBOS = {
  whatsapp: '5573999999999',
  phone: '+55 (73) 99999-9999',
  email: 'contato@salesberbert.com.br'
};

function getSiteRoot() {
  const script = document.querySelector('script[src$="assets/js/main.js"]');
  if (!script) return new URL('./', window.location.href);
  return new URL('../../', script.src);
}

function buildInternalUrl(path) {
  return new URL(path, getSiteRoot()).href;
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
    window.location.href = buildInternalUrl('imoveis/em-construcao.html');
  });
}

function initDataActions() {
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    link.href = `https://wa.me/${SBOS.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de falar com um consultor Sales & Berbert.')}`;
    link.target = '_blank';
    link.rel = 'noopener';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSmartSearch();
  initDataActions();
});
