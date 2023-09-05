

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function contido(procurado, colecao) {
  for (let i = 0; i < len(colecao); i++) {
    if (colecao[i] === procurado) {
      return true
    }
  }
  return false
}

function diferentes(colecao) {
  /*
    colecao             = 'banana'
    array               = [] 
    Após loop           = ['b', 'a', 'n']
    "array" recebe dados sequencialmente enquanto uma versão repetida do dado não existir
  */
  const array = []
  let array_i = 0

  for (let i = 0; i < len(colecao); i++) {
    if (!contido(colecao[i], array)) {
      array[array_i] = colecao[i]
      array_i++
    }
  }

  return array
}

function diferentes_built_in(colecao) {
  const array = []
  
  for (let i = 0; i < colecao.length; i++) {
    if (!contido(colecao[i], array)) {
      array.push(colecao[i])
    }
  }

  return array
}

const fruta = 'banana'
const linguagem = 'javascript'
const rank = [1, 2, 3, 1]

console.log('========== MINHA VERSÃO ==========')
console.log(diferentes(fruta))
console.log(diferentes(linguagem))
console.log(diferentes(rank))

console.log('========== VERSÃO COM USO DE BUILT-INS ==========')
console.log(diferentes_built_in(rank))
console.log(diferentes_built_in(linguagem))
console.log(diferentes_built_in(fruta))
