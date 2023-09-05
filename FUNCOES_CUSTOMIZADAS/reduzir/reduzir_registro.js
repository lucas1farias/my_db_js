

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function reduzir_registro(criterio, registro, vi, chave) {
  let acumulador = vi
  for (let i = 0; i < len(registro); i++) {
    acumulador = criterio(registro[i][chave], acumulador)
  }
  return acumulador
}

function criterio_maior(i, ref) {
  return i > ref ? i : ref
}

function obter_indice(registro, chave, ref) {
  for (let i = 0; i < len(registro); i++) {
    if (registro[i][chave] == ref) {
      return registro[i]
    }
  }
  return ''
}

const alunos = [
  {'nome': 'Ana', 'n_faltas': 4},
  {'nome': 'Ena', 'n_faltas': 11},
  {'nome': 'Ina', 'n_faltas': 7},
]

const aluno_mais_ausente = reduzir_registro(criterio_maior, alunos, 0, 'n_faltas')
const aluno = obter_indice(alunos, 'n_faltas', aluno_mais_ausente)
console.log(aluno)
