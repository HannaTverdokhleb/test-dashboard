const list = document.querySelector('.menu-list')
const links = list.getElementsByClassName('menu-item__link');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {
    e.preventDefault();
    let current = document.querySelector('.menu-item__link_active');
    current.classList.remove('menu-item__link_active');
    this.classList.add('menu-item__link_active');
  });
}

const burger = document.querySelector('.burger-button');
burger.addEventListener('click', (e) => {
  burger.classList.toggle('active');
  document.querySelector('.sidebar').classList.toggle('active');
});