let controlNext = document.querySelector('.next');
let controlPrev = document.querySelector('.preview');
let opiniones = document.querySelectorAll('.opinion-item');


let i = 0;
controlNext.addEventListener('click', () =>{
    console.log('funciona!');
    if(i < opiniones.length-1){
        i++;
        opiniones[i-1].classList.add('d-none');
        opiniones[i].classList.remove('d-none');
        opiniones[i].style.transition = '1s';
    }
})

controlPrev.addEventListener('click', () =>{
    if(i > 0){
        i--;
        opiniones[i+1].classList.add('d-none');
        opiniones[i].classList.remove('d-none');
        opiniones[i].style.transition = '1s';
    }
})

