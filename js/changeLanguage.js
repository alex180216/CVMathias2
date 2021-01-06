const btnEspanol = document.querySelector('#espanol');
const btnIngles = document.querySelector('#ingles');
const btnEspanolHam = document.querySelector('#espanol-hamb');
const btnInglesHam = document.querySelector('#ingles-hamb');

/* LOADER */
window.addEventListener('load', () =>{
    document.querySelector('#loader').classList.remove('loader');
    document.querySelector('#loader').classList.add('salir-loader');
});

/* VARIABLES ===================================================================== */
/* HAMBURGUER */
let btnPresentationHam = document.querySelector('#presentation-ham');
let btnSobreMiHam = document.querySelector('#sobremi-ham');
let btnExperienciaHam = document.querySelector('#experiencia-ham');
let btnServiciosHam = document.querySelector('#servicios-ham');
let btnResumeHam = document.querySelector('#resume-ham');
let btnEmpresasHam = document.querySelector('#empresas-ham');
let btnOpinionesHam = document.querySelector('#opiniones-ham');
let btnContactoHam = document.querySelector('#contacto-ham');




/* SECCION PRESENTACION */
let tituloPresentacion = document.querySelector('#presentation > div > .main > .sub-container > .titulo > p');
let bienvenida = document.querySelector('#presentation > div >.main > .sub-container > .datos > p');
let saludoColor = document.querySelector('#saludo-presentacion > span');
let saludoH1 = document.querySelector('#saludo-h1');
let nombre = document.querySelector('#presentation > div >.main > .sub-container > .datos > .margin-minus');

/* SECCION HABILIDADES */
let tituloHabilidades = document.querySelector('#titulo-habilidades');
let subtituloHabilidades = document.querySelector('#subtitulo-habilidades');
let tituloHabilidadesH11 = document.querySelector('#titulo-hab1');
let tituloHabilidadesH12 = document.querySelector('#titulo-hab2');
let tituloHabilidadesColor = document.querySelector('#titulo-hab-span');
let descripcionHabilidades = document.querySelector('#desc-hab');
let listaHabilidades = document.querySelector('.lista-progress');

/* SECCION EXPERIENCIA */
let tituloExperiencia = document.querySelector('#tituloExp');
let subtituloExperiencia = document.querySelector('#sub-exp');
let enlaceOtrosTrabajos = document.querySelector('#enlace-otros');

/* SECCION SERVICIOS */
let tituloServicios = document.querySelector('#titulo-serv');
let subtituloServicios = document.querySelector('#sub-serv');
let tituloServiciosH1 = document.querySelector('#titulo-h1-serv');
let tituloServiciosColor = document.querySelector('#span-h1-serv');
let tiempoServ = document.querySelector('#tiempo');
let listaServ = document.querySelector('#lista-serv');

/* SECCION RESUME */
let tituloResumen = document.querySelector('#titulo-res');
let subtituloEducacion = document.querySelector('#subtitulo-res-educacion');
let listaEducacion = document.querySelector('#lista-educacion');
let subtituloEXperiencia = document.querySelector('#subtitulo-res-experiencia');
let listaTrabajos = document.querySelector('#lista-trabajos-experiencia');

/* SECCION EMPRESAS */
let tituloEmpresas = document.querySelector('#titulo-empresas');

/* SECCIONES OPINIONES */
let tituloOpiniones = document.querySelector('#titulo-opiniones');
let subtituloOpiniones = document.querySelector('#subtitulo-opiniones');
let listaOpiniones = document.querySelector('#lista-opiniones');

/* SECCION CONTACTO */
let tituloContacto = document.querySelector('#titulo-contacto');
let subtituloContacto = document.querySelector('#subtitulo-contacto');
let inputEmail = document.querySelector('#email');
let inputNombre = document.querySelector('#nombre');
let inputAsunto = document.querySelector('#asunto');
let inputMensaje = document.querySelector('#exampleFormControlTextarea1');
let btnEnviar = document.querySelector('#btn-enviar');

btnEspanol.addEventListener('click', (e) =>{
    e.preventDefault();

    btnEspanol.classList.add('active');
    btnEspanol.classList.remove('no-active');
    btnIngles.classList.remove('active');
    btnIngles.classList.add('no-active');
    btnEspanolHam.classList.add('active');
    btnEspanolHam.classList.remove('no-active');
    btnInglesHam.classList.remove('active');
    btnInglesHam.classList.add('no-active');
    
    pasarEspanol();
} );


btnIngles.addEventListener('click', (e) =>{
    e.preventDefault();

    btnIngles.classList.add('active');
    btnIngles.classList.remove('no-active');
    btnEspanol.classList.remove('active');
    btnEspanol.classList.add('no-active');
    btnInglesHam.classList.add('active');
    btnInglesHam.classList.remove('no-active');
    btnEspanolHam.classList.remove('active');
    btnEspanolHam.classList.add('no-active');
    pasarIngles();
} );

/* HAMBURGUER */
btnEspanolHam.addEventListener('click', (e) =>{
    e.preventDefault();

    btnEspanolHam.classList.add('active');
    btnEspanolHam.classList.remove('no-active');
    btnInglesHam.classList.remove('active');
    btnInglesHam.classList.add('no-active');
    btnEspanol.classList.add('active');
    btnEspanol.classList.remove('no-active');
    btnIngles.classList.remove('active');
    btnIngles.classList.add('no-active');
    
    pasarEspanol();
} );


btnInglesHam.addEventListener('click', (e) =>{
    e.preventDefault();
    
    btnInglesHam.classList.add('active');
    btnInglesHam.classList.remove('no-active');
    btnEspanolHam.classList.remove('active');
    btnEspanolHam.classList.add('no-active');
    btnIngles.classList.add('active');
    btnIngles.classList.remove('no-active');
    btnEspanol.classList.remove('active');
    btnEspanol.classList.add('no-active');
    pasarIngles();
} );



const pasarEspanol = (e) => {
    /* ESPAÑOL=================================================================================================== */
    
    /* HAMBURGUER */
    btnPresentationHam.textContent = "Presentación";
    btnSobreMiHam.textContent = "Habilidades";
    btnExperienciaHam.textContent = "Experiencia";
    btnServiciosHam.textContent = "Servicios";
    btnResumeHam.textContent = "Resumen"; 
    btnEmpresasHam.textContent = "Empresas";
    btnOpinionesHam.textContent = "Opiniones";
    btnContactoHam.textContent = "Contacto";
    
    
    /* SECCION PRESENTACION */
    tituloPresentacion.textContent = "Presentación";
    bienvenida.textContent = "Bienvenido a mi cv";
    saludoColor.textContent = "hola!";
    saludoH1.textContent = "Soy";
    nombre.textContent = "Matias Wajchman";


    /* SECCION HABILIDADES */
    tituloHabilidades.textContent = "habilidades";
    subtituloHabilidades.textContent = "Sobre mi";
    tituloHabilidadesH11.textContent = "Me gusta";
    tituloHabilidadesColor.textContent = "diseñar y desarrollar"
    tituloHabilidadesH12.textContent = "las mejores páginas webs";
    descripcionHabilidades.textContent = "Me gusta trajabar en proyectos grandes y en equipo. Me desenvuelvo en el front de los proyectos y desarrollo algunas apps móviles con Flutter";
    //LISTA DE HABILIDADES================/*
    listaHabilidades.innerHTML = `
                                    <div class="item my-5">
                                    <div class="nivel">
                                        <p id="act1">Desarrollo</p>
                                        <p id="nivel1">59%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 59%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    </div>
                                    <div class="item my-5">
                                    <div class="nivel">
                                        <p id="act2">Dibujo</p>
                                        <p id="nivel2">75%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    </div>
                                    <div class="item my-5">
                                    <div class="nivel">
                                        <p id="act3">Pintura</p>
                                        <p id="nivel3">25%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    </div>
                                    <div class="item my-5">
                                    <div class="nivel">
                                        <p id="act4">VideoJuegos</p>
                                        <p id="nivel4">100%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    </div>


                                `;

    /* SECCION EXPERIENCIA */
    tituloExperiencia.textContent = "Experiencia";
    subtituloExperiencia.textContent = "Trabajos hechecitos!";
    enlaceOtrosTrabajos.textContent = "VER OTROS TRABAJOS";

    /* SECCION SERVICIOS */
    tituloServicios.textContent = "servicios";
    subtituloServicios.textContent = "Mis Servicios";
    tituloServiciosH1.textContent = "Creo";
    tituloServiciosColor.textContent = "Cosas maravillosas";
    tiempoServ.textContent = "añitos de experiencia";
    listaServ.innerHTML = `
                                    <li>Diseño</li>
                                    <li>Desarrollo</li>
                                    <li>Dinero</li>
                                    <li>Azul</li>
                                    <li>Verde</li>
                            `;

    /* SECCION RESUME */
    tituloResumen.textContent = "Resumen";
    subtituloEducacion.textContent = "Educación";
    listaEducacion.innerHTML=`
                                        <li>
                                            <h3>Curso de especialización</h3>
                                            <p class="lugar">Universidad Aconcagua, Mendoza, Argentina</p>
                                            <p class="fecha">Enero 2004 - Dicembre 2010</p>
                                            <p class="descripcion">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et accusantium dolorum assumenda obcaecati. Corrupti ratione quibusdam facere distinctio veritatis debitis assumenda consectetur consequatur similique molestiae. Labore fugit molestiae animi pariatur.
                                            </p>
                                        </li>
                                        <li>
                                            <h3>Curso de especialización</h3>
                                            <p class="lugar">Universidad Aconcagua, Mendoza, Argentina</p>
                                            <p class="fecha">Enero 2004 - Dicembre 2010</p>
                                            <p class="descripcion">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et accusantium dolorum assumenda obcaecati. Corrupti ratione quibusdam facere distinctio veritatis debitis assumenda consectetur consequatur similique molestiae. Labore fugit molestiae animi pariatur.
                                            </p>
                                        </li>
                            `;
    subtituloEXperiencia.textContent = "Experiencia"; 
    listaTrabajos.innerHTML=`
                                        <li>
                                            <h3>FALABELLA</h3>
                                            <p class="lugar">Universidad Aconcagua, Mendoza, Argentina</p>
                                            <p class="fecha">Enero 2004 - Dicembre 2010</p>
                                            <p class="descripcion">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et accusantium dolorum assumenda obcaecati. Corrupti ratione quibusdam facere distinctio veritatis debitis assumenda consectetur consequatur similique molestiae. Labore fugit molestiae animi pariatur.
                                            </p>
                                        </li>
                                        <li>
                                            <h3>MAKRO</h3>
                                            <p class="lugar">Universidad Aconcagua, Mendoza, Argentina</p>
                                            <p class="fecha">Enero 2004 - Dicembre 2010</p>
                                            <p class="descripcion">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et accusantium dolorum assumenda obcaecati. Corrupti ratione quibusdam facere distinctio veritatis debitis assumenda consectetur consequatur similique molestiae. Labore fugit molestiae animi pariatur.
                                            </p>
                                        </li>
                            `;
    /* SECCION EMPRESAS */
    tituloEmpresas.textContent = "Empresitas";

    /* SECCIONES OPINIONES */
    tituloOpiniones.textContent = "Opiniones";
    subtituloOpiniones.textContent = "creatividad y dedicación, son las palabras que definen a Matias";


    /* SECCION CONTACTO */
    tituloContacto.textContent = "Contacto";
    subtituloContacto.textContent = "Contáctame";
    inputEmail.placeholder = "Correo*";
    inputNombre.placeholder = "Nombre*";
    inputAsunto.placeholder = "Asunto*";
    inputMensaje.placeholder = "Mensaje*";
    btnEnviar.textContent = "Enviar";
}

const pasarIngles = (e) =>{


    /* INGLES===================================================================================================== */

    /* HAMBURGUER */
    btnPresentationHam.textContent = "Presentation";
    btnSobreMiHam.textContent = "Habilities";
    btnExperienciaHam.textContent = "Experience";
    btnServiciosHam.textContent = "Services";
    btnResumeHam.textContent = "Resume"; 
    btnEmpresasHam.textContent = "Company";
    btnOpinionesHam.textContent = "Opinions";
    btnContactoHam.textContent = "Contact";

    /* SECCION PRESENTACION */
    tituloPresentacion.textContent = "Presentation";
    bienvenida.textContent = "Welcome to Matias's CV";
    saludoColor.textContent = "hi!";
    saludoH1.textContent = "i'm";
    nombre.textContent = "Matias Wajchman";


    /* SECCION HABILIDADES */
    tituloHabilidades.textContent = "habilities";
    subtituloHabilidades.textContent = "About me";
    tituloHabilidadesH11.textContent = "I like";
    tituloHabilidadesColor.textContent = "design & development"
    tituloHabilidadesH12.textContent = "the best web sites";
    descripcionHabilidades.textContent = "Me gusta trajabar en proyectos grandes y en equipo. Me desenvuelvo en el front de los proyectos y desarrollo algunas apps móviles con Flutter";
    //LISTA DE HABILIDADES================/*
    listaHabilidades.innerHTML = `
                                    <div class="item my-5">
                                    <div class="nivel">
                                        <p id="act1">Desarrollo</p>
                                        <p id="nivel1">59%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 59%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    </div>
                                    <div class="item my-5">
                                    <div class="nivel">
                                        <p id="act2">Dibujo</p>
                                        <p id="nivel2">75%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    </div>
                                    <div class="item my-5">
                                    <div class="nivel">
                                        <p id="act3">Pintura</p>
                                        <p id="nivel3">25%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    </div>
                                    <div class="item my-5">
                                    <div class="nivel">
                                        <p id="act4">VideoJuegos</p>
                                        <p id="nivel4">100%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    </div>


                                `;

    /* SECCION EXPERIENCIA */
    tituloExperiencia.textContent = "Experiencia";
    subtituloExperiencia.textContent = "Trabajos hechecitos!";
    enlaceOtrosTrabajos.textContent = "VER OTROS TRABAJOS";

    /* SECCION SERVICIOS */
    tituloServicios.textContent = "servicios";
    subtituloServicios.textContent = "Mis Servicios";
    tituloServiciosH1.textContent = "Creo";
    tituloServiciosColor.textContent = "Cosas maravillosas";
    tiempoServ.textContent = "añitos de experiencia";
    listaServ.innerHTML = `
                                    <li>Diseño</li>
                                    <li>Desarrollo</li>
                                    <li>Dinero</li>
                                    <li>Azul</li>
                                    <li>Verde</li>
                            `;

    /* SECCION RESUME */
    tituloResumen.textContent = "Resumen";
    subtituloEducacion.textContent = "Educación";
    listaEducacion.innerHTML=`
                                        <li>
                                            <h3>Curso de especialización</h3>
                                            <p class="lugar">Universidad Aconcagua, Mendoza, Argentina</p>
                                            <p class="fecha">Enero 2004 - Dicembre 2010</p>
                                            <p class="descripcion">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et accusantium dolorum assumenda obcaecati. Corrupti ratione quibusdam facere distinctio veritatis debitis assumenda consectetur consequatur similique molestiae. Labore fugit molestiae animi pariatur.
                                            </p>
                                        </li>
                                        <li>
                                            <h3>Curso de especialización</h3>
                                            <p class="lugar">Universidad Aconcagua, Mendoza, Argentina</p>
                                            <p class="fecha">Enero 2004 - Dicembre 2010</p>
                                            <p class="descripcion">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et accusantium dolorum assumenda obcaecati. Corrupti ratione quibusdam facere distinctio veritatis debitis assumenda consectetur consequatur similique molestiae. Labore fugit molestiae animi pariatur.
                                            </p>
                                        </li>
                            `;
    subtituloEXperiencia.textContent = "Experiencia"; 
    listaTrabajos.innerHTML=`
                                        <li>
                                            <h3>FALABELLA</h3>
                                            <p class="lugar">Universidad Aconcagua, Mendoza, Argentina</p>
                                            <p class="fecha">Enero 2004 - Dicembre 2010</p>
                                            <p class="descripcion">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et accusantium dolorum assumenda obcaecati. Corrupti ratione quibusdam facere distinctio veritatis debitis assumenda consectetur consequatur similique molestiae. Labore fugit molestiae animi pariatur.
                                            </p>
                                        </li>
                                        <li>
                                            <h3>MAKRO</h3>
                                            <p class="lugar">Universidad Aconcagua, Mendoza, Argentina</p>
                                            <p class="fecha">Enero 2004 - Dicembre 2010</p>
                                            <p class="descripcion">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et accusantium dolorum assumenda obcaecati. Corrupti ratione quibusdam facere distinctio veritatis debitis assumenda consectetur consequatur similique molestiae. Labore fugit molestiae animi pariatur.
                                            </p>
                                        </li>
                            `;
    /* SECCION EMPRESAS */
    tituloEmpresas.textContent = "Empresitas";

    /* SECCIONES OPINIONES */
    tituloOpiniones.textContent = "Opiniones";
    subtituloOpiniones.textContent = "creatividad y dedicación, son las palabras que definen a Matias";


    /* SECCION CONTACTO */
    tituloContacto.textContent = "Contacto";
    subtituloContacto.textContent = "Contáctame";
    inputEmail.placeholder = "Correo*";
    inputNombre.placeholder = "Nombre*";
    inputAsunto.placeholder = "Asunto*";
    inputMensaje.placeholder = "Mensaje*";
    btnEnviar.textContent = "Enviar";


}

/* DETALLES */
COLOR = ' #28ff88';
saludoColor.style.color = COLOR;
tituloHabilidadesColor.style.color = COLOR;
tituloServiciosColor.style.color = COLOR;
