const itemsExperiencia = document.querySelectorAll('#experiencia >.main > .sub-container > .datos > .grilla-jobs > .grilla-items');
const contenedor = document.querySelector('#experiencia');

/* BACKGROUND DINAMICO */

for(let i=0; i < itemsExperiencia.length; i++){
    itemsExperiencia[i].addEventListener('mouseover', (e) =>{
        e.preventDefault();
        if( i == 0 ){
            contenedor.style.backgroundImage = 'url("../img/img-background.png")';
            contenedor.style.transition = '1s';
        }else if(i==1){
            contenedor.style.backgroundImage = 'url("../img/barberia1.jpg")';
            contenedor.style.transition = '1s';
        }else if(i==2){
            contenedor.style.backgroundImage = 'url("../img/barberia2.jpg")';
            contenedor.style.transition = '1s';
        }else if(i==3){
            contenedor.style.backgroundImage = 'url("../img/barberia3.jpg")';
            contenedor.style.transition = '1s';
        }else if(i==4){
            contenedor.style.backgroundImage = 'url("../img/img12.jpg")';
            contenedor.style.transition = '1s';
        }else if(i==5){
            contenedor.style.backgroundImage = 'url("../img/img10.png")';
            contenedor.style.transition = '1s';
        }      
        
    });
}
