

function len(colecao) {
  let n_indices = 0
  for (let i in colecao) {
    n_indices++
  }
  return n_indices
}

function fatiar(colecao, min, max, eh_array=false) {
  if (!eh_array) {
    let string = ''
    for (let i = min; i <= max; i++) {
      string += colecao[i]
    }
    return string
  }
  else {
    const array = []
    let array_i = 0
    for (let i = min; i <= max; i++) {
      array[array_i] = colecao[i]
      array_i++
    }
    return array
  }
}

function fatiar_built_in(colecao, min, max, eh_array=false) {
  if (!eh_array) {
    let string = ''
    for (let i = min; i <= max; i++) {
      string += colecao[i]
    }
    return string
  }
  else {
    const array = []
    for (let i = min; i <= max; i++) {
      array.push(colecao[i])
    }
    return array
  }
}

const linguagem = 'javascript'
const fruta = ['b', 'a', 'n', 'a', 'n', 'a']

console.log('========== MINHA VERSÃO ==========')
console.log(fatiar(linguagem, 0, 3))
console.log(fatiar(fruta, 2, len(fruta) - 1, true))

console.log('========== VERSÃO COM USO DE BUILT-INS ==========')
console.log(fatiar_built_in(linguagem, 0, 3))
console.log(fatiar_built_in(fruta, 2, len(fruta) - 1, true))
