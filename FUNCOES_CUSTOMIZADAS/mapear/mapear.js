

/*
Recria uma coleção passada como parâmetro
Objetivo: Alterar cada índice de um iterável
OBS: A alteração pode ser feita na própria função ou anexada num novo array
*/

function mapear(criterio, colecao) {
  const array = []
  let array_i = 0
  for (let i = 0; i < tamanho(colecao); i++) {
    array[array_i] = criterio(colecao[i])
    array_i++
  }
  return array
}

function tamanho(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function criterio_incrementar(i) {
  return i = i + 1
}

const rank = [1, 2, 3]
console.log(mapear(criterio_incrementar, rank))
