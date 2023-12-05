const list = document.querySelector('.menu-list')
const links = list.getElementsByClassName("menu-item__link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("menu-item__link_active");
    current[0].className = current[0].className.replace(" menu-item__link_active", "");
    this.className += " menu-item__link_active";
  });
}

const burger = document.querySelector('.burger-button');
burger.addEventListener('click', (e) => {
  burger.classList.toggle('active');
  document.querySelector('.sidebar').classList.toggle('active');
})


