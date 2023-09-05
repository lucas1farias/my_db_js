

import {question} from "readline-sync"

function len(colecao) {
  let n_indices = 0
  for (let i in colecao) {
    n_indices++
  }
  return n_indices
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
  const maiusculas = intervalo(65, 91)
  const minusculas = intervalo(97, 123)
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
  const alfabeto_maiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let codigo = undefined

  for (let i = 0; i < len(alfabeto_maiusculo); i++) {
    alfabeto_maiusculo[i] === letra ? codigo = maiusculas[i] : null
  }

  for (let i = 0; i < len(alfabeto); i++) {
    alfabeto[i] === letra ? codigo = minusculas[i] : null
  }

  letra === ' ' ? codigo = 32 : null

  return codigo
}

function eh_letra(char) {
  const codigo = codigo_letra(char)
  return codigo >= 65 && codigo <= 90 || codigo >= 97 && codigo <= 122 || codigo === 32 ? true : false
}

function eh_letra_built_in(char) {
  const codigo = char.charCodeAt(0)
  return codigo >= 65 && codigo <= 90 || codigo >= 97 && codigo <= 122 || codigo === 32 ? true : false
}

const caracteres = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '_', '$', '%', '&', '*', '+', '-', '/', '<', '=', '>', '?', '@', '^', '|', '~', '0'
]

for (let i = 0; i < len(caracteres); i++) {
  console.log(caracteres[i], eh_letra(caracteres[i]))
}

question('<<< PRESSIONE ENTER >>>')

for (let i = 0; i < len(caracteres); i++) {
  console.log(caracteres[i], eh_letra_built_in(caracteres[i]))
}
