export function valida(input) {
  const tipoDeInput = input.dataset.tipo

  if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input)
  }
}


const validadores = {
  nacimiento: input => validarNacimiento(input)
}




//? Para validar Si es mayor de edad

function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  let mensaje = "";
  if (!mayorDeEdad(fechaCliente)) {
      mensaje = "Debes tener al menos 18 años de edad";
  }
  input.setCustomValidity(mensaje);
}
function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  fecha.setFullYear(fecha.getFullYear() + 18);
  return fecha <= fechaActual;
}


