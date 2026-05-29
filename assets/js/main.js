const SBOS = {
  whatsapp: '5573999999999',
  phone: '+55 (73) 99999-9999',
  email: 'contato@salesberbert.com.br',
  developmentUrl: '/imoveis/em-construcao.html'
};

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
  document.querySelectorAll('[data-client-area]').forEach(link => { link.href = '/cliente/index.html'; });
  document.querySelectorAll('[data-broker-area]').forEach(link => { link.href = '/corretor/index.html'; });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSmartSearch();
  initDataActions();
});
