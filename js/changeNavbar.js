const navbar = document.querySelector('header > .contenedor-nav');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.backgroundColor = '#2a2a2e';
    navbar.style.transition = '1s';
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.transition = '1s';
  }
}