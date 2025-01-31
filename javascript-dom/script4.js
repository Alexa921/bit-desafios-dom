/*4. Con base en el desafío #3 =>
- Quitar espacios en blanco al inicio y al final de todos los campos.
- La contraseña debe tener por lo menos un caracter especial (!$#+-?.)
- Imprimir por consola cuantas vocales tiene cada campo.*/

const $usuarioEnviar = document.getElementById("usuario");
const $contrasenaEnviar = document.getElementById("contrasena");
const $botonEnviar = document.getElementById("boton");

$botonEnviar.addEventListener("click", enviado);

function enviado() {
  // Eliminar espacios al inicio y final
  const usuario = $usuarioEnviar.value.trim();
  const contrasena = $contrasenaEnviar.value.trim();

  // Contar vocales en usuario y contraseña
  const contarVocales = (texto) => {
    const coincidencias = texto.match(/[aeiouAEIOU]/g);
    return coincidencias ? coincidencias.length : 0;
  };

  // Mostrar usuario y contraseña en consola
  console.log(`Usuario ingresado: ${usuario}`);
  console.log(`Contraseña ingresada: ${contrasena}`);

  // Mostrar cantidad de vocales en cada campo
  console.log(`Vocales en usuario: ${contarVocales(usuario)}`);
  console.log(`Vocales en contraseña: ${contarVocales(contrasena)}`);

  // Validar longitud de la contraseña
  if (contrasena.length !== 10) {
    alert("La contraseña debe tener exactamente 10 caracteres");
    return;
  }

  // Validar que la contraseña tenga al menos un carácter especial
  if (!/[!$#+\-?.]/.test(contrasena)) {
    alert("La contraseña debe contener al menos un carácter especial (!$#+-?.)");
    return;
  }

  alert("La contraseña cumple con los requisitos");
}
