

function tamanho(colecao) {
  let n_indices = 0
  for (let i in colecao) {
    n_indices++
  }
  return n_indices
}

function substituir_repetidos(colecao, antigo, novo, eh_array=false) {
  if (!eh_array) {
    let string = ''
    for (let i = 0; i < tamanho(colecao); i++) {
      colecao[i] === antigo ? string += novo : string += colecao[i]
    }
    return string
  }
  else {
    const array = []
    let array_i = 0
    for (let i = 0; i < tamanho(colecao); i++) {
      // Isso aqui não é permitido em Python
      colecao[i] === antigo ? array[array_i] = novo : array[array_i] = colecao[i]
      array_i++
    }
    return array
  }
}

function substituir_repetidos_built_in(colecao, antigo, novo, eh_array=false) {
  
  if (!eh_array) {
    let string = ''
    for (let i = 0; i < colecao.length; i++) {
      colecao[i] === antigo ? string += novo : string += colecao[i]
    }
    return string
  }

  else {
    const array = []
    for (let i = 0; i < colecao.length; i++) {
      colecao[i] === antigo ? array.push(novo) : array.push(colecao[i])
    }
    return array
  }
}

const linguagem = 'J v script'
const linguagem_array = ['J', '', 'v', '', 's', 'c', 'r', 'i', 'p', 't']

console.log('========== MINHA VERSÃO ==========')
console.log(substituir_repetidos(linguagem, ' ', 'a'))
console.log(substituir_repetidos(linguagem_array, '', 'a', true))

console.log('========== VERSÃO COM USO DE BUILT-INS ==========')
console.log(substituir_repetidos_built_in(linguagem, ' ', 'a'))
console.log(substituir_repetidos_built_in(linguagem_array, '', 'a', true))
