let hamburguer = document.querySelector('.menu');
let menu = document.querySelector('#menu-ham');
let cerrarHamburguer = document.querySelector('#cerrar-ham');
let enlaces = document.querySelectorAll('.menucito > ul > li > a');


/* for (let i=0; i<enlaces.length; i++){
    enlaces[i].addEventListener('click', (e)=>{
        
    })
} */


const cerrar = (e) =>{
    menu.classList.remove('menu-ham-activo');
    menu.classList.add('menu-ham-inactivo');
}


hamburguer.addEventListener('click', (e) =>{
    e.preventDefault();
    menu.classList.remove('menu-ham-inactivo');
    menu.classList.add('menu-ham-activo');
});

cerrarHamburguer.addEventListener('click', (e)=>{
    e.preventDefault();
    menu.classList.remove('menu-ham-activo');
    menu.classList.add('menu-ham-inactivo');
});