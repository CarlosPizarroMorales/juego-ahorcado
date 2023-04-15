/**********************************************
 **                VARIABLES                 **
 **********************************************/
//* ELEMENTOS DEL DOM
const palabraOcultaCaja = document.querySelector('#palabraOculta');
const letterInput = document.getElementById('letraUsuario');
const userInput = document.getElementById('inputLetraUsuario');
const formulario = document.getElementById('formulario');
const mensajes = document.querySelector('#mensajes');

//* CONSTANTES Y VALORES BASE
const palabras = ['JAVASCRIPT', 'HTML', 'CSS', 'BOOTSTRAP', 'JQUERY', 'REACT', 'NODE', 'ANGULAR', 'VUE', 'TYPESCRIPT', 'WEBPACK', 'BABEL', 'JSON', 'API', 'AJAX', 'DOM', 'GIT', 'GITHUB', 'TERMINAL', 'LINUX', 'WINDOWS', 'MACOS', 'PYTHON', 'JAVA', 'PHP', 'RUBY', 'SQL', 'MONGODB', 'FIREBASE'];
const palabra = palabras[Math.floor(Math.random() * palabras.length)]; 
const cantCajas = palabra.length;
const letrasSueltas = palabra.split('');      
const arregloFinal=[];
let vistaLetras = '';
let intentosMax = 5;

/**********************************************
 **                 EVENTOS                   **
 **********************************************/
console.log(palabra, cantCajas, letrasSueltas); //! SOLO PARA DEBUG
construirVistaLetras(palabra);                          // INICIA VISTA
formulario.addEventListener('submit', capturaEntrada);  // INICIA JUEGO

/**********************************************
**      FUNCIONES  (Aprovecha hoisting)      **
**********************************************/
function construirVistaLetras(arr){

  for(let i=0; i<arr.length; i++){
    arregloFinal[i]="";
    vistaLetras += `<div class="fs-1 bg-dark text-light p-4 letra">${arr[i]}</div>`;
  }
  
  palabraOcultaCaja.innerHTML = vistaLetras;
  
  const letrasDePalabra = palabraOcultaCaja.getElementsByClassName('letra');
  for (let i = 0; i < letrasDePalabra.length; i++){
    letrasDePalabra[i].classList.add('letraOculta');
  }
}

function capturaEntrada(e){
  
  e.preventDefault();                         // NO RELOAD DOCUMENTO

  const letraIngresada = e.target.elements[0].value.toUpperCase();
  
  if (letraIngresada.trim() === '') return;   // GUARD CLAUSE
  
  userInput.value = '';                       // LIMPIAR INPUT LUEGO DE INTENTO
  const coincidencia = evaluarCoincidencia(letraIngresada);
  const estado = evaluaEstado(coincidencia, intentosMax);
  console.log(estado);
}

function evaluarCoincidencia(letra){

  const letrasDePalabra = palabraOcultaCaja.getElementsByClassName('letra');
  let control = 0;
  for (let i = 0; i < letrasDePalabra.length; i++) {
    if (palabra[i] === letra) {
      letrasDePalabra[i].classList.remove('letraOculta');
      arregloFinal[i] = letra;
      control++;        // controla exito en intento != 0 es coincidencia 
    }  
  }
  console.log(palabra, arregloFinal, control);  //! SOLO PARA DEBUG
  if ( control === 0 ) {
    intentosMax--;
    console.log(`${intentosMax}to intentos`);
    return false;
  }
    console.log(`${intentosMax}to intentos`);
  return true;
}

function evaluaEstado(controlCoincidencia, intentos) {
  //^ CASO GANAR
  if (controlCoincidencia) {
    if (palabra === arregloFinal.join()) {
      console.log('You win');
      mensajes.textContent = 'Ganaste maldito. La próxima vez será';
      setTimeout(function(){
        location.reload();
      }, 3000);
    }     
  } else if (intentos === 1) {
    //^ CASO PERDER
    console.log('You died Loser!');
    mensajes.textContent = 'Naaah. Eres un loser';
    setTimeout(function(){
      location.reload();
    }, 3000);
  }
}