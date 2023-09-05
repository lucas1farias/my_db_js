

function tamanho(colecao) {
  let n_indices = 0
  for (let i in colecao) {
      n_indices++
  }
  return n_indices
}

function contido(procurado, colecao) {
  for (let i = 0; i < tamanho(colecao); i++) {
    if (colecao[i] === procurado) {
      return true
    }
  }
  return false
}

/*
  O parâmetro "colecao_maior" de "contido_sem_ordem" precisa ter apenas seus dados únicos
  Sendo assim, eles são submetido a esta função
*/
function diferentes(colecao) {
  const array = []
  let array_i = 0
  for (let i = 0; i < tamanho(colecao); i++) {
    if (!contido(colecao[i], array)) {
      array[array_i] = colecao[i]
      array_i++
    }
  }
  return array
}

function contido_sem_ordem(colecao_menor, colecao_maior) {
  let contador = 0
  for (let i = 0; i < tamanho(colecao_maior); i++) {
    for (let j = 0; j < tamanho(colecao_menor); j++) {
      colecao_menor[j] === colecao_maior[i] ? contador++ : null
    }
  }
  return contador == tamanho(colecao_menor) ? true : false
}

// [length]
function contido_sem_ordem_built_in(colecao_menor, colecao_maior) {
  let contador = 0
  for (let i = 0; i < colecao_maior.length; i++) {
    for (let j = 0; j < colecao_menor.length; j++) {
      colecao_menor[j] === colecao_maior[i] ? contador++ : null
    }
  }
  return contador == colecao_menor.length ? true : false
}

const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
const alfabeto_e_numeros = 'abcdefghijklmnopqrstuvwxyz0123456789'

console.log('========== MINHA VERSÃO ==========')
console.log([1], contido_sem_ordem('ba', diferentes('banana')))
console.log([2], contido_sem_ordem('ban', diferentes('banana')))
console.log([3], contido_sem_ordem('str', diferentes('sortear')))
console.log([4], contido_sem_ordem(alfabeto, diferentes(alfabeto_e_numeros)))
console.log(contido_sem_ordem('bax', diferentes('banana')))   
console.log(contido_sem_ordem('strj', diferentes('sortear')))                  
console.log(contido_sem_ordem(alfabeto + '_', diferentes(alfabeto_e_numeros))) 

console.log('========== VERSÃO COM USO DE BUILT-INS ==========')
console.log([1], contido_sem_ordem_built_in('ba', diferentes('banana')))
console.log([2], contido_sem_ordem_built_in('ban', diferentes('banana')))
console.log([3], contido_sem_ordem_built_in('str', diferentes('sortear')))
console.log([4], contido_sem_ordem_built_in(alfabeto, diferentes(alfabeto_e_numeros)))
console.log(contido_sem_ordem_built_in('bax', diferentes('banana')))   
console.log(contido_sem_ordem_built_in('strj', diferentes('sortear')))                  
console.log(contido_sem_ordem_built_in(alfabeto + '_', diferentes(alfabeto_e_numeros)))
