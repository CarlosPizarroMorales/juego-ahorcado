/**********************************************
**             PROBANDO ENLACE               **
**********************************************/
// console.log('HOla mundo!');

/**********************************************
 **                VARIABLES                 **
 **********************************************/
//* Elementos del DOM
const palabraOcultaCaja = document.querySelector('#palabraOculta');
const letterInput = document.getElementById('letraUsuario');
const formulario = document.getElementById('formulario');

//* constantes y valores base
const palabras = ['javascript', 'html', 'css', 'bootstrap', 'jquery', 'react', 'node', 'angular', 'vue', 'typescript', 'webpack', 'babel', 'json', 'api', 'ajax', 'dom', 'git', 'github', 'terminal', 'linux', 'windows', 'macos', 'python', 'java', 'php', 'ruby', 'sql', 'mongodb', 'firebase'];

// ROBERTO: const palabraDesconocida
const palabra = palabras[Math.floor(Math.random() * palabras.length)]; 
const cantCajas = palabra.length;
// Roberto: arregloInicial             
const letrasSueltas = palabra.split('');      
const arregloFinal=[];
let vistaLetras = '';

console.log(palabra, cantCajas, letrasSueltas, arregloFinal);

function construirVistaLetras(arr){
  for(let i=0; i<arr.length; i++){
    arregloFinal[i]="";
    // arregloFinal.push('');
    vistaLetras += `<div class="fs-1 border border-4 border-info bg-dark text-light p-4">${arr[i]}</div>`;
    // console.log(vistaLetras);
  }
  palabraOcultaCaja.innerHTML = vistaLetras;
} 

function validarEntradaUsuario(){
  const letra = letterInput.value.toLowerCase();
  letterInput.value = '';
}

function capturaEntrada(e){
  e.preventDefault();
  const letraIngresada = e.target.elements[0].value;
  console.log(letraIngresada, typeof letraIngresada);
}
/**********************************************
**                 EVENTOS                   **
**********************************************/
construirVistaLetras(palabra);
formulario.addEventListener('submit', capturaEntrada);