

function tamanho(colecao) {
  let n_indices = 0
  for (let i in colecao) {
    n_indices ++
  }
  return n_indices
}

function contido_com_ordem(menor, maior) {
  // Alternativo: for (let i = 0; i <= tamanho(maior) - tamanho(menor); i++)
  for (let i = 0; i < tamanho(maior) - tamanho(menor) + 1; i++) {
    let nativo = true
    for (let j = 0; j < tamanho(menor); j++) {
      const algum_char_estrangeiro = menor[j] !== maior[i + j]
      if (algum_char_estrangeiro) {
        nativo = false
        break
      }
    }
    
    if (nativo) {
      return true
    }
  }
  return false
}

// [length]
function contido_com_ordem_built_in(menor, maior) {
  for (let i = 0; i < (maior.length - menor.length); i++) {
    let nativo = true
    for (let j = 0; j < menor.length; j++) {
      const algum_char_estrangeiro = menor[j] != maior[i + j]
      if (algum_char_estrangeiro) {
        nativo = false
        break
      }
    }
    if (nativo) {
      return true
    }
  }
  return false
}

const linguagem = 'javascript'
const fruta = 'banana'

// Consoles com [int] são os que têm retorno: true
console.log('========== MINHA VERSÃO ==========') 
console.log([1], contido_com_ordem('java', linguagem))      
console.log([2], contido_com_ordem('scr', linguagem))       
console.log(contido_com_ordem('java.', linguagem))     
console.log(contido_com_ordem('java ', linguagem))     
console.log(contido_com_ordem('jaav', linguagem))      
console.log(contido_com_ordem('scriptx', linguagem))   
console.log('serve array igualmente ---> ', contido_com_ordem(['a', 'n', 'a'], ['b', 'a', 'n', 'a', 'n', 'a']))

console.log('========== VERSÃO COM USO DE BUILT-INS ==========') 
console.log([1], contido_com_ordem_built_in('java', linguagem))      
console.log([2], contido_com_ordem_built_in('scr', linguagem))       
console.log(contido_com_ordem_built_in('java.', linguagem))     
console.log(contido_com_ordem_built_in('java ', linguagem))     
console.log(contido_com_ordem_built_in('jaav', linguagem))      
console.log(contido_com_ordem_built_in('scriptx', linguagem))   

console.log('========== VERSÃO NATIVA ==========')
console.log([1], fruta.includes('ana'))
console.log([2], fruta.includes('ban'))
console.log([3], fruta.includes('nan'))
console.log([4], fruta.includes('nana'))
console.log([5], fruta.includes('bana'))
console.log(fruta.includes('ab'))
