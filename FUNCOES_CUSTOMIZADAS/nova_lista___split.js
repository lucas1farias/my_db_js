

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function fatiar(colecao, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += colecao[i]
  }
  return string
}

/*
  A função funciona de 2 maneiras:
    Quando se quer que a string tenha algum separador
    Quando se quer somente converter a string inteira em lista, ou seja: ('')
*/
function nova_lista(colecao, separador) {
  const array = []
  let array_i = 0
  let pos = 0
  
  if (separador != '') {
    for (let i = 0; i < len(colecao); i++) {
      if (colecao[i] === separador) {
        array[array_i] = fatiar(colecao, pos, i - 1)
        array_i++
        pos = i + 1
      }
    }
  }
  
  else {
    for (let i = 0; i < len(colecao); i++) {
      array[array_i] = colecao[i]
      array_i++
    }
  }
  
  return array
}

function nova_lista_built_in(colecao, separador) {
  const array = []
  let pos = 0
  
  if (separador != '') {
    for (let i = 0; i < len(colecao); i++) {
      if (colecao[i] === separador) {
        array.push(fatiar(colecao, pos, i - 1))
        pos = i + 1
      }
    }
  }
  else {
    for (let i = 0; i < len(colecao); i++) {
      array.push(colecao[i])
    }
  }
  
  return array
}

const linguagem = 'p y t h o n'
const linguagem_outra = 'java'

console.log('========== MINHA VERSÃO ==========')
console.log(nova_lista(linguagem + ' ', ' '))
console.log(nova_lista(linguagem_outra , ''))

console.log('========== VERSÃO COM USO DE BUILT-INS ==========')
console.log(nova_lista_built_in(linguagem + ' ', ' '))
console.log(nova_lista_built_in(linguagem_outra , ''))

console.log('========== VERSÃO NATIVA ==========')
console.log(linguagem.split(' '))
console.log(linguagem_outra.split('')) // Isso aqui o Python não aceita
