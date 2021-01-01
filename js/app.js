const itemsExperiencia1 = document.querySelectorAll('#experiencia > div >.main > .sub-container > .datos > .grilla-jobs > .grilla-items');
const itemsExperiencia2 = document.querySelectorAll('#experiencia > div > div > div > .main > .sub-container > .datos > .grilla-jobs > .grilla-items');
const contenedor = document.querySelector('#experiencia');

/* BACKGROUND DINAMICO */

for(let i=0; i < itemsExperiencia1.length; i++){
    itemsExperiencia1[i].addEventListener('mouseover', (e) =>{
        e.preventDefault();
        if( i == 0 ){
            contenedor.style.backgroundImage = 'url("../img/img-background.png")';
            contenedor.style.transition = '0.5s';
        }else if(i==1){
            contenedor.style.backgroundImage = 'url("../img/barberia1.jpg")';
            contenedor.style.transition = '0.5s';
        }else if(i==2){
            contenedor.style.backgroundImage = 'url("../img/barberia2.jpg")';
            contenedor.style.transition = '0.5s';
        }else if(i==3){
            contenedor.style.backgroundImage = 'url("../img/barberia3.jpg")';
            contenedor.style.transition = '0.5s';
        }else if(i==4){
            contenedor.style.backgroundImage = 'url("../img/img12.jpg")';
            contenedor.style.transition = '0.5s';
        }else if(i==5){
            contenedor.style.backgroundImage = 'url("../img/img10.png")';
            contenedor.style.transition = '0.5s';
        }      
        
    });
}


for(let i=0; i < itemsExperiencia2.length; i++){
    itemsExperiencia2[i].addEventListener('mouseover', (e) =>{
        e.preventDefault();
        if( i == 0 ){
            contenedor.style.backgroundImage = 'url("../img/img-background.png")';
            contenedor.style.transition = '0.5s';
        }else if(i==1){
            contenedor.style.backgroundImage = 'url("../img/barberia1.jpg")';
            contenedor.style.transition = '0.5s';
        }else if(i==2){
            contenedor.style.backgroundImage = 'url("../img/barberia2.jpg")';
            contenedor.style.transition = '0.5s';
        }else if(i==3){
            contenedor.style.backgroundImage = 'url("../img/barberia3.jpg")';
            contenedor.style.transition = '0.5s';
        }else if(i==4){
            contenedor.style.backgroundImage = 'url("../img/img12.jpg")';
            contenedor.style.transition = '0.5s';
        }else if(i==5){
            contenedor.style.backgroundImage = 'url("../img/img10.png")';
            contenedor.style.transition = '0.5s';
        }      
        
    });
}

