

function tamanho(colecao) {
  let n_indices = 0
  for (let i in colecao) {
    n_indices++
  }
  return n_indices
}

/*
  Normalmente, em filtragem, cada índice é comparado com um 'valor fixo'
  Nessa versão, ao invés, se usa um 'valor dinâmico', o que resulta na inclusão de 'extra'
*/
function filtrar_v2(criterio, colecao, extra) {
  const array = []
  let array_i = 0
  for (let i = 0; i < tamanho(colecao); i++) {
    if (criterio(colecao[i], extra)) {
      array[array_i] = colecao[i]
      array_i++
    }
  }
  return array
}

function contido_com_ordem(colecao_menor, colecao_maior) {
  for (let i = 0; i <= tamanho(colecao_maior) - tamanho(colecao_menor); i++) {
    let nativo = true
    for (let j = 0; j < tamanho(colecao_menor); j++) {
        const algum_char_estrangeiro = colecao_menor[j] != colecao_maior[i + j]
        if (algum_char_estrangeiro) {
          nativo = false    
        }
    }
    if (nativo) {
        return true
    }
  }
  return false
}

function criterio_eh_maior_que_n(i, n) {
  return i > n
}

function criterio_letra_especifica(i, palavra) {
  for (let indice = 0; indice < tamanho(i); indice++) {
    if (i[indice] === palavra) {
      return true
    }
  }
  return false
}

function criterio_palavra_especifica(i, palavra) {
  return contido_com_ordem(palavra, i) ? true : false
}

const rank = [1, 2, 3]
const nomes = [
  'João', 'Maria', 'Pedro', 'Ana', 'José', 'Mariana', 'Lucas', 'Camila', 'Carlos', 'Laura',
  'Fernando', 'Juliana', 'Rafael', 'Beatriz', 'Rodrigo', 'Larissa', 'Gustavo', 'Amanda', 'Matheus', 'Isabela'
]

console.log(filtrar_v2(criterio_eh_maior_que_n, rank, 2))
console.log(filtrar_v2(criterio_letra_especifica, nomes, 'L'))
console.log(filtrar_v2(criterio_palavra_especifica, nomes, 'la'))
