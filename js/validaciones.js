export function valida(input) {
  const tipoDeInput = input.dataset.tipo

  if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input)
  }

  console.log(input.validity)
  if (input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalid')
    input.parentElement.querySelector('.input-message-error').innerHTML = ''
  } else {
    input.parentElement.classList.add('input-container--invalid')
    input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input)
  }
}


const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
]

const mensajesDeError = {
  nombre: {
    valueMissing: 'Este campo nombre no puede estar vacio'
  },
  email: {
    valueMissing: 'Este campo email no puede estar vacio',
    typeMismatch: 'El correo no es valio'
  },
  password: {
    valueMissing: 'Este campo contraseña no puede estar vacio',
    patternMismatch: 'Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.'
  },
  nacimiento: {
    valueMissing: 'Este campo no puede estar vacio',
    customError: 'Debes tener al menos 18 años de edadddd'
  },
  numero: {
    valueMissing: 'Numero teléfonico no puede estar vacio',
    patternMismatch: 'El formato requerido es XX-XXX-XXX-XXX'
  },
  direccion: {
    valueMissing: 'Este campo dirección no puede estar vacio',
    patternMismatch: 'La direccion debe tener entre 10 a 40 caracteres.'
  },
  ciudad: {
    valueMissing: 'Este campo dirección no puede estar vacio',
    patternMismatch: 'La direccion debe tener entre 10 a 40 caracteres.'
  },
  estado: {
    valueMissing: 'Este campo dirección no puede estar vacio',
    patternMismatch: 'La direccion debe tener entre 10 a 40 caracteres.'
  }

}


const validadores = {
  nacimiento: input => validarNacimiento(input)
}





function mostrarMensajeDeError(typeInput, input) {
  let mensaje = "";

  tipoDeErrores.forEach( error => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[typeInput][error]
    }
  })

  return mensaje
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


