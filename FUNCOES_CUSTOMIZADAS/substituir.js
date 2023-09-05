

function tamanho(colecao) {
  let n_indices = 0
  for (let i in colecao) {
    n_indices++
  }
  return n_indices
}

function substituir(colecao, min, max, substituto) {
  let string = ''
  min === 0 ? min = -1 : null
  for (let i = 0; i < tamanho(colecao); i++) {
    i < min ? string += colecao[i] : null
    i >= min && i < max ? string += '' : null
    i === max ? string += substituto : null
    i > min && i > max ? string += colecao[i] : null
  }
  return string
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

// [length]
function substituir_built_in(colecao, min, max, substituto) {
  let string = ''
  min === 0 ? min = -1 : null
  for (let i = 0; i < colecao.length; i++) {
    i < min ? string += colecao[i] : null
    i >= min && i < max ? string += '' : null
    i === max ? string += substituto : null
    i > min && i > max ? string += colecao[i] : null
  }
  return string
}

const linguagem = 'javascript'

console.log('========== MINHA VERSÃO ==========')
console.log(substituir(linguagem, 4, tamanho(linguagem) - 1, ''))
console.log(substituir(linguagem, 0, 3, 'python'))

console.log('========== VERSÃO COM USO DE BUILT-INS ==========')
console.log(substituir_built_in(linguagem, 4, linguagem.length - 1, ''))
console.log(substituir_built_in(linguagem, 0, 3, 'python'))

console.log('========== VERSÃO NATIVA ==========')
console.log(linguagem.replace(linguagem, linguagem.slice(0, 4)))
console.log(linguagem.replace(linguagem, 'python' + linguagem.slice(4, linguagem.length)))
