

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

function codigo_letra(letra) {
  const minusculas = intervalo(97, 123)
  const maiusculas = intervalo(65, 91)
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
  const alfabeto_maiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let codigo = 0

  for (let i = 0; i < len(alfabeto_maiusculo); i++) {
    alfabeto_maiusculo[i] === letra ? codigo = maiusculas[i] : null
  }

  for (let i = 0; i < len(alfabeto); i++) {
    alfabeto[i] === letra ? codigo = minusculas[i] : null
  }

  letra === ' ' ? codigo = 32 : null

  return codigo
}

const [a, z, A, Z, espaco] = ['a', 'z', 'A', 'Z', ' ']

console.log('\n========== VERSÃO NATIVA ==========')
console.log(a.charCodeAt(0), z.charCodeAt(0), A.charCodeAt(0), Z.charCodeAt(0), espaco.charCodeAt(0))

console.log('========== MINHA VERSÃO ==========')
console.log(codigo_letra(a), codigo_letra(z), codigo_letra(A), codigo_letra(Z), codigo_letra(espaco), '\n')
