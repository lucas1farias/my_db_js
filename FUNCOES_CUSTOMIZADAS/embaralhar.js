

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function n_aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function embaralhar(colecao, i_partida=0) {
  while (i_partida < len(colecao)) {
    let i = n_aleatorio(0, len(colecao))
    const pos_inicial = colecao[i_partida]
    colecao[i_partida] = colecao[i]
    colecao[i] = pos_inicial
    i_partida++
  }
  return colecao
}

function embaralhar_built_in(colecao, i_partida=0) {
  while (i_partida < colecao.length) {
    let i = n_aleatorio(0, colecao.length)
    const pos_inicial = colecao[i_partida]
    colecao[i_partida] = colecao[i]
    colecao[i] = pos_inicial
    i_partida++
  }
  return colecao
}

let rank = [1, 2, 3, 4, 5, 6, 7]
let rank_built_in = [1, 2, 3, 4, 5, 6, 7]
let rank_nativo = [1, 2, 3, 4, 5, 6, 7]

console.log('========== MINHA VERSÃO ==========')
console.log(rank)
rank = embaralhar(rank)
console.log(rank)

console.log('========== VERSÃO COM USO DE BUILT-INS ==========')
console.log(rank_built_in)
rank_built_in = embaralhar(rank_built_in)
console.log(rank_built_in)

console.log('========== VERSÃO NATIVA ==========')
console.log(rank_nativo)
rank_nativo.sort(() => {return Math.random() - 0.5})
console.log(rank_nativo)
