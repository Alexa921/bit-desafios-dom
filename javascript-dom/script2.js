/*2. Crear un formulario para que el usuario ingrese: usuario y contraseña, al hacer click al botón de enviar mostrarle
al usuario una ventana emergente informando que se esta procesando la solicitud, almacenar los datos ingresados en variables,
imprimir por consola los valores de las variables. */

const $botonEnviar = document.getElementById('boton');
const $usuarioEnviar = document.getElementById('usuario');
const $contrasenaEnviar = document.getElementById('contrasena');

$botonEnviar.addEventListener('click', enviar);

function enviar() {
    alert('Se esta procesando la solicitud');
    console.log($usuarioEnviar.value);
    console.log($contrasenaEnviar.value);
}

