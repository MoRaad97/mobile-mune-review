const navOpen = document.querySelector('.menu-bars');
const navClose = document.querySelector('.close-btn-wrapper');
const menuElement = document.querySelector('.menu');
const linksAction = menuElement.querySelectorAll('a');

navOpen.addEventListener('click', () => {
  menuElement.classList.remove('hidden');
  document.querySelector('body').classList.add('overflow-hidden');
});

navClose.addEventListener('click', () => {
  menuElement.classList.add('none');
  document.querySelector('body').classList.remove('overflow-hidden');
});

linksAction.forEach((node) => {
  node.onclick = () => {
    menuElement.classList.add('hidden');
    document.querySelector('body').classList.remove('overflow-hidden');
  };
});