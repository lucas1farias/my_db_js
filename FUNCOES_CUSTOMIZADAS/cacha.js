

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

  while (min < max) {
    array[array_i] = min
    array_i++
    min++
  }

  return array
}

// Faz ambas conversões: obter a letra do código, reveter código para letra
function codigo_alfabeto(letra='a', codigo=97, obter_codigo) {
  const maiusculas = intervalo(65, 91)
  const minusculas = intervalo(97, 123)
  const alfabeto_maiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const alfabeto_minusculo = 'abcdefghijklmnopqrstuvwxyz'
  
  if (obter_codigo) {
    let codigo = 0

    for (let i = 0; i < tamanho(alfabeto_maiusculo); i++) {
      letra === alfabeto_maiusculo[i] ? codigo = maiusculas[i] : ''
    }
  
    for (let i = 0; i < tamanho(alfabeto_minusculo); i++) {
      letra === alfabeto_minusculo[i] ? codigo = minusculas[i] : ''
    }
  
    return codigo
  }
  else {
    let letra = ''

    for (let i = 0; i < tamanho(alfabeto_maiusculo); i++) {
      codigo === maiusculas[i] ? letra = alfabeto_maiusculo[i] : ''
    }
  
    for (let i = 0; i < tamanho(alfabeto_minusculo); i++) {
      codigo === minusculas[i] ? letra = alfabeto_minusculo[i] : ''
    }
  
    return letra
  }
  
}

function cacha(colecao, tipo) {
  let string = ''
  for (let i = 0; i < tamanho(colecao); i++) {
    const codigo_letra = codigo_alfabeto(colecao[i], 0, true)
    tipo === 0 
    ? string += codigo_alfabeto('', codigo_letra - 32, false)
    : string += codigo_alfabeto('', codigo_letra + 32, false)
  }
  return string
}

function cacha_array(colecao, tipo) {
  const array = []
  let array_i = 0
  
  for (let i = 0; i < tamanho(colecao); i++) {
    
    const codigo_letra = codigo_alfabeto(colecao[i], 0, true)
    
    if (tipo == 0) {
      array[array_i] = codigo_alfabeto('', codigo_letra - 32, false)
      array_i++
    }
    else {
      array[array_i] = codigo_alfabeto('', codigo_letra + 32, false)
      array_i++
    }
  }
  return array
}

function cacha_built_in(colecao, tipo) {
  let string = ''
  for (let i = 0; i < colecao.length; i++) {
    if (tipo == 0) {
      string += String.fromCharCode(colecao[i].charCodeAt(0) - 32)
    }
    else {
      string += String.fromCharCode(colecao[i].charCodeAt(0) + 32)
    }
  }
  return string
}

function cacha_array_built_in(colecao, tipo) {
  const array = []
  
  for (let i = 0; i < colecao.length; i++) {
    
    const codigo_letra = codigo_alfabeto(colecao[i], 0, true)
    
    if (tipo == 0) {
      array.push(codigo_alfabeto('', codigo_letra - 32, false))
    }
    else {
      array.push(codigo_alfabeto('', codigo_letra + 32, false))
    }
  }
  return array
}

const linguagemA = 'javascript'
const linguagemB = 'JAVA'
const linguagemC = ['p', 'y', 't', 'h', 'o', 'n']
const linguagemD = ['R', 'U', 'B', 'Y']

console.log('========== MINHA VERSÃO ==========')
console.log(cacha(linguagemA, 0))
console.log(cacha(linguagemB, 1))
console.log(cacha_array(linguagemC, 0))
console.log(cacha_array(linguagemD, 1))

console.log('========== VERSÃO COM USO DE BUILT-INS ==========')
console.log(cacha_built_in(linguagemA, 0))
console.log(cacha_built_in(linguagemB, 1))
console.log(cacha_array_built_in(linguagemC, 0))
console.log(cacha_array_built_in(linguagemD, 1))

console.log('========== VERSÃO NATIVA ==========')
console.log(linguagemA.toUpperCase())
console.log(linguagemB.toLowerCase())
// Para os arrays serem influenciados, todos os índices dele devem ser strings
let array = []
for (let i = 0; i < linguagemC.length; i++) {
  array.push(linguagemC[i].toUpperCase())
}
console.log(array)
array = []
for (let i = 0; i < linguagemD.length; i++) {
  array.push(linguagemD[i].toLowerCase())
}
console.log(array)
