

function tamanho(colecao) {
  let n_indices = 0
  for (let i in colecao) {
    n_indices++
  }
  return n_indices
}

function array_indefinido(qtd) {
  const array = []
  
  for (let i = 0; i < qtd; i++) {
    array[i] = undefined
  }
  return array
}

// [push]
function array_indefinido_built_in(qtd) {
  const array = []
  for (let i = 0; i < qtd; i++) {
    array.push(undefined)
  }
  return array
}

const vetor = array_indefinido(3)
const vetor_built_in = array_indefinido_built_in(3)
const dados = [1, 2, 3]

console.log('\n========== ANTES ==========')
console.log(vetor)
console.log(vetor_built_in)

for (let i = 0; i < tamanho(vetor); i++) {
  vetor[i] = dados[i]
  vetor_built_in[i] = dados[i]
}

console.log('========== DEPOIS ==========')
console.log(vetor)
console.log(vetor_built_in)
console.log('\n')
