/*3. Con base en el desafío #2 => La contraseña debe tener 10 caracteres, mostrar
una alerta si no se cumple esta condición.*/

const $usuarioEnviar = document.getElementById("usuario");
const $contrasenaEnviar = document.getElementById("contrasena");
const $botonEnviar = document.getElementById("boton");

$botonEnviar.addEventListener("click", enviado);

function enviado() {
  console.log($usuarioEnviar.value);
  console.log($contrasenaEnviar.value);
  if ($contrasenaEnviar.value.length < 10 || $contrasenaEnviar.value.length > 10) {
    alert("La contraseña debe tener 10 caracteres");
  } else {
    alert("La contraseña cumple con los requisitos");
  }
}
