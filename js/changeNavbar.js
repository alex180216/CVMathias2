const navbar = document.querySelector('.contenedor-nav');
/* window.onscroll = scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    console.log(document.body.scrollTop);
    navbar.style.backgroundColor = '#2a2a2e';
    navbar.style.transition = '1s';
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.transition = '1s';
  }
} */

window.onscroll = function() {
  var y = window.scrollY;
  console.log(y);
};