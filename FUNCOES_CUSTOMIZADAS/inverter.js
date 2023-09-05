

function tamanho(colecao) {
  let n_indices = 0
  for (let i in colecao) {
      n_indices ++
  }
  return n_indices
}

function inverter(colecao, eh_array=false) {
  let i = 1
  const tamanho_colecao = tamanho(colecao)
  
  if (!eh_array) {
    let string = ''
    while (i <= tamanho_colecao) {
      string += colecao[tamanho_colecao - i]
      i++
    }
    return string
  }
  
  else {
    const array = []
    let array_i = 0
      
    while (i <= tamanho_colecao) {
      array[array_i] = colecao[tamanho_colecao - i]
      array_i++
      i++
    }
    return array 
  }
}

function inverter_for(colecao, eh_array=false) {
  const tamanho_colecao = tamanho(colecao) - 1
  
  if (!eh_array) {
    let string = ''
    for (let i = tamanho_colecao; i >= 0; i--) {
      string += colecao[i]
    }
    return string
  }
  
  else {
    const array = []
    let array_i = 0
    for (let i = tamanho_colecao; i >= 0; i--) {
      array[array_i] = colecao[i]
      array_i++
    }
    return array
  }
}

function inverter_built_in(colecao, eh_array=false) {
  let i = 1
  const tamanho_colecao = colecao.length
  
  if (!eh_array) {
    let string = ''
    while (i <= tamanho_colecao) {
      string += colecao[tamanho_colecao - i]
      i++
    }
    return string
  }
  
  else {
    const array = []
      
    while (i <= tamanho_colecao) {
      array.push(colecao[tamanho_colecao - i])
      i++
    }
    return array 
  }
}

const linguagem = 'java'
const fruta = ['u', 'v', 'a']
const nums = [1, 2, 3]

console.log('========== MINHA VERSÃO ==========')
console.log(inverter(linguagem))
console.log(inverter(fruta, true))

console.log('========== MINHA VERSÃO (loop for) ==========')
console.log(inverter_for(linguagem))
console.log(inverter_for(fruta, true))

console.log('========== VERSÃO COM USO DE BUILT-INS ==========')
console.log(inverter_built_in(linguagem))
console.log(inverter_built_in(fruta, true))

// Ainda não sei fazer com strings ou arrays com strings
console.log('========== VERSÃO NATIVA ==========')
console.log(nums.sort((a, b) => {return b-a}))
