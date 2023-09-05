

function tamanho(colecao) {
  let n_indices = 0
  for (let i in colecao) {
    n_indices++
  }
  return n_indices
}

// Mapear similar a versão comum, mas com um parâmetro extra, criado por necessidade
function mapear_v2(criterio, colecao, extra) {
  const array = []
  let array_i = 0
  for (let i = 0; i < tamanho(colecao); i++) {
    array[array_i] = criterio(colecao[i], extra)
    array_i++
  }
  return array
}

function criterio_elevar_potencia(i, pot) {
  return i ** pot
}

const rank = [1, 2, 3]

console.log(mapear_v2(criterio_elevar_potencia, rank, 2))

