/*1. HTML con únicamente un div, replicar la muestra de la manipulación del DOM
explicada en clase, Debe mostrar su nombre completo con el texto a color.*/

const $manipulacionDom = document.getElementById('manipulacion-dom');
console.log($manipulacionDom);

$manipulacionDom.textContent = 'Alexandra Restrepo Agudelo';
$manipulacionDom.className = 'nombre';

