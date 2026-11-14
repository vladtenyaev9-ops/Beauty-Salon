const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__navbar');

function setMenu(open) {
  menu.classList.toggle('open', open);
  burger.classList.toggle('active', open);
  document.body.classList.toggle('no-scroll', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
}

burger.addEventListener('click', () => {
  setMenu(!menu.classList.contains('open'));
});


menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 800) setMenu(false);
});