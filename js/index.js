const nav_open = document.querySelector('.menu-bars');
const nav_close = document.querySelector('.close-btn-wrapper');
const menu_element = document.querySelector('.menu');
const links_action = menu_element.querySelectorAll('a');

nav_open.addEventListener('click', () => {
  menu_element.classList.remove('hidden');
  document.querySelector('body').classList.add('overflow-hidden');
});

nav_close.addEventListener('click', () => {
  menu_element.classList.add('none');
  document.querySelector('body').classList.remove('overflow-hidden');
});

links_action.forEach((node) => {
  node.onclick = () => {
    menu_element.classList.add('hidden');
    document.querySelector('body').classList.remove('overflow-hidden');
  };
});