

function tamanho(colecao) {
  let n_indices = 0
  for (let i in colecao) {
    n_indices++
  }
  return n_indices
}

function nova_string(colecao, separador) {
  let string = ''
  for (let i = 0; i < tamanho(colecao); i++) {
    i === 0 ? string += colecao[i] : string += separador + colecao[i]
  }
  return string
}

// [length]
function nova_string_built_in(colecao, separador) {
  let string = ''
  for (let i = 0; i < colecao.length; i++) {
    i === 0 ? string += colecao[i] : string += separador + colecao[i]
  }
  return string
}

const linguagem = ['p', 'y', 't', 'h', 'o', 'n']

console.log('========== MINHA VERSÃO ==========')
console.log(nova_string(linguagem, '.'))

console.log('========== VERSÃO COM USO DE BUILT-INS ==========')
console.log(nova_string_built_in(linguagem, '.'))

console.log('========== VERSÃO NATIVA ==========')
console.log(linguagem.join('.'))
