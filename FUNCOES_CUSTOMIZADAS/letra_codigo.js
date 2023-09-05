

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function intervalo(min, max) {
  const array = []
  let array_i = 0
  for (let i = min; i < max; i++) {
    array[array_i] = i
    array_i++
  }
  return array
}

function letra_codigo(codigo) {
  const maiusculas = intervalo(65, 91)
  const minusculas = intervalo(97, 123)
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
  const alfabeto_maiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let letra = ''

  for (let i = 0; i < len(maiusculas); i++) {
    maiusculas[i] === codigo ? letra = alfabeto_maiusculo[i] : null
  }

  for (let i = 0; i < len(minusculas); i++) {
    minusculas[i] === codigo ? letra = alfabeto[i] : null
  }

  codigo === 32 ? letra = ' ' : null

  return letra
}

// Nativo
console.log(
  String.fromCharCode(97), String.fromCharCode(122), String.fromCharCode(65), String.fromCharCode(90),
  String.fromCharCode(32) === ' ' ? 'espaço' : null
)

// Customizado
console.log(
  letra_codigo(97), letra_codigo(122), letra_codigo(65), letra_codigo(90), 
  letra_codigo(32) === ' ' ? 'espaço' : null
)
