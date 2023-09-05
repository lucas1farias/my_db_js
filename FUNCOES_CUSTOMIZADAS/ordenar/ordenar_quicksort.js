

function realocar(colecao, b, a) {
  const pos_inicial = colecao[a]
  colecao[a] = colecao[b]
  colecao[b] = pos_inicial
}
  
function particionar(criterio, colecao, esquerda, direita) {
  const ref = colecao[direita]
  let menor_pos_nova = esquerda - 1

  for (let menor_pos_antiga = esquerda; menor_pos_antiga < direita; menor_pos_antiga++) {
    if (criterio(colecao[menor_pos_antiga], ref)) {
      menor_pos_nova++
      realocar(colecao, menor_pos_antiga, menor_pos_nova)
    }
  }

  realocar(colecao, direita, menor_pos_nova + 1)
  return menor_pos_nova + 1
}
  
/*
  Trabalha com arrays, ou seja, se o dado for iterável não array, ele deve ser convertido para array
*/
function ordenar(criterio, colecao, esquerda, direita) {
  if (esquerda < direita) {
    const ref_anterior = particionar(criterio, colecao, esquerda, direita)
    ordenar(criterio, colecao, esquerda, ref_anterior - 1)
    ordenar(criterio, colecao, ref_anterior + 1, direita)
  }
  return colecao
}
  
/*
  Os critérios podem ser do todos os tipos possíveis. Aqui temos alguns exemplos
*/
function criterio_menor_maior(a, b) {
  return a <= b
}
    
function criterio_maior_menor(a, b) {
  return a >= b
}
  
function criterio_letra_alfabeto_decrescente(a, b) {
  return codigo_letra(a) > codigo_letra(b)
}
  
function criterio_letra_alfabeto_crescente(a, b) {
  return codigo_letra(a) < codigo_letra(b)
}

function criterio_tamanho_colecao_decrescente(a, b) {
  return tamanho(a) > tamanho(b) 
}

function criterio_tamanho_colecao_crescente(a, b) {
  return tamanho(a) < tamanho(b) 
}

function criterio_ultima_letra_crescente(a, b) {
  return codigo_letra(a[tamanho(a) - 1]) < codigo_letra(b[tamanho(b) - 1])
}

function criterio_ultima_letra_decrescente(a, b) {
  return codigo_letra(a[tamanho(a) - 1]) > codigo_letra(b[tamanho(b) - 1])
}

function criterio_letra_centro(a, b) {
  return codigo_letra(a[Math.floor(tamanho(a) / 2)]) > codigo_letra(b[Math.floor(tamanho(b) / 2)])
}
  
/*
  Funções auxiliares
*/
function tamanho(colecao) {
  let n_indices = 0
  for (let i in colecao) {
    n_indices++
  }
  return n_indices
}
  
function intervalo(min, max) {
  const array = []
  let array_i = 0
  for (let i = min; i < max; i++) {
    array[array_i] = i
    array_i++
  }
  return array
}
    
function codigo_letra(letra) {
  const maiusculas = intervalo(65, 91)
  const minusculas = intervalo(97, 123)
  const alfabeto_maiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const alfabeto_minusculo = 'abcdefghijklmnopqrstuvwxyz'
  let codigo = undefined

  for (let i = 0; i < tamanho(alfabeto_maiusculo); i++) {
    letra === alfabeto_maiusculo[i] ? codigo = maiusculas[i] : ''
  }

  for (let i = 0; i < tamanho(alfabeto_minusculo); i++) {
    letra === alfabeto_minusculo[i] ? codigo = minusculas[i] : ''
  }

  return codigo
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
    for (let i = min; i < max; i++) {
      array[array_i] = colecao[i]
      array_i++
    }
    return array  
  }
}
  
function nova_lista(colecao, separador) {
  const array = []
  let array_i = 0
  let pos = 0
    
  for (let i = 0; i < tamanho(colecao); i++) {
    if (colecao[i] === separador) {
      array[array_i] = fatiar(colecao, pos, i - 1)
      pos = i + 1
      array_i++
    }
    if (separador === '') {
      array[array_i] = colecao[i]
      array_i++
    }
  }
  return array
}
  
const linguagem = nova_lista('python', '') // Exemplo de quando não é array (submetida a conversão)
const pessoas = ['Paulo', 'Ana', 'Mauru', 'Livi', 'Laurine']
const rank = [6, 2, 1, 4, 7, 3, 5]
const strings = ['abcd', 'a', 'abcde', 'abc', 'ab']

console.log('========== MINHA VERSÃO: vetores ==========')
console.log(ordenar(criterio_menor_maior, rank, 0, tamanho(rank) - 1))
console.log(ordenar(criterio_maior_menor, rank, 0, tamanho(rank) - 1))

console.log('========== VERSÃO NATIVA: vetores ==========')
console.log(rank.sort((a, b) => {return a-b})) // menor_maior
console.log(rank.sort((a, b) => {return b-a})) // maior_menor

console.log('========== MINHA VERSÃO: ordem alfabética ==========')
console.log(ordenar(criterio_letra_alfabeto_crescente, linguagem, 0, tamanho(linguagem) - 1))
console.log(ordenar(criterio_letra_alfabeto_decrescente, linguagem, 0, tamanho(linguagem) - 1))

console.log('========== VERSÃO NATIVA: ordem alfabética ==========')
console.log(linguagem.sort((a, b) => {return a.charCodeAt(0) - b.charCodeAt(0)}))
console.log(linguagem.sort((a, b) => {return b.charCodeAt(0) - a.charCodeAt(0)}))

console.log('========== MINHA VERSÃO: tamanho da coleção ==========')
console.log(ordenar(criterio_tamanho_colecao_crescente, strings, 0, tamanho(strings) - 1))
console.log(ordenar(criterio_tamanho_colecao_decrescente, strings, 0, tamanho(strings) - 1))

console.log('========== VERSÃO NATIVA: tamanho da coleção ==========')
console.log(strings.sort((a, b) => {return a.length - b.length}))
console.log(strings.sort((a, b) => {return b.length - a.length}))

console.log('========== MINHA VERSÃO: última letra ==========')
console.log(ordenar(criterio_ultima_letra_crescente, pessoas, 0, tamanho(pessoas) - 1))
console.log(ordenar(criterio_ultima_letra_decrescente, pessoas, 0, tamanho(pessoas) - 1))

console.log('========== VERSÃO NATIVA: última letra ==========')
console.log(pessoas.sort((a, b) => {return a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0)}))
console.log(pessoas.sort((a, b) => {return b[b.length - 1].charCodeAt(0) - a[a.length - 1].charCodeAt(0)}))

console.log('========== MINHA VERSÃO: letra do meio ==========')
console.log(ordenar(criterio_letra_centro, pessoas, 0, tamanho(pessoas) - 1))

console.log('========== VERSÃO NATIVA: letra do meio ==========')
console.log(pessoas.sort((a, b) => {
  const x = a[Math.floor(a.length / 2)].charCodeAt(0)
  const y = b[Math.floor(b.length / 2)].charCodeAt(0)
  return x - y
}))
console.log(pessoas.sort((a, b) => {
  const x = b[Math.floor(b.length / 2)].charCodeAt(0)
  const y = a[Math.floor(a.length / 2)].charCodeAt(0)
  return x - y
}))
