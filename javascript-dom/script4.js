/*4. Con base en el desafío #3 =>
- Quitar espacios en blanco al inicio y al final de todos los campos.
- La contraseña debe tener por lo menos un caracter especial (!$#+-?.)
- Imprimir por consola cuantas vocales tiene cada campo.*/

const $usuarioEnviar = document.getElementById("usuario");
const $contrasenaEnviar = document.getElementById("contrasena");
const $botonEnviar = document.getElementById("boton");

$botonEnviar.addEventListener("click", enviado);

function enviado() {
  console.log($usuarioEnviar.value.trim().match(/[aeiouAEIOU]/g));
  console.log($contrasenaEnviar.value.trim().match(/[aeiouAEIOU]/g));
  if ($contrasenaEnviar.value.length < 10 || $contrasenaEnviar.value.length > 10) {
    alert("La contraseña debe tener 10 caracteres");
  } else {
    alert("La contraseña cumple con los requisitos");
  }
}