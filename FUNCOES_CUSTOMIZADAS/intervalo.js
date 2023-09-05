

/*
  Simular a função built-in python "range" de forma simplificada
  O parâmetro 2 é "não inclusivo", para desfazer, alterar para "<= max" nas funções
*/

function intervalo_for(min, max) {
  const array = []
  let array_i = 0

  for (let i = min; i < max; i++) {
    array[array_i] = i
    array_i++
  }

  return array
}

function intervalo_while(min, max) {
  const array = []
  let array_i = 0

  while (min < max) {
    array[array_i] = min
    min++
    array_i++
  }
  return array
}

// [push]
function intervalo_for_built_in(min, max) {
  const array = []
  for (let i = min; i < max; i++) {
    array.push(i)
  }
  return array
}

// [push]
function intervalo_while_built_in(min, max) {
  const array = []
  while (min < max) {
    array.push(min)
    min++;
  }
  return array
}

console.log('\n========== MINHA VERSÃO ==========')
console.log(intervalo_for(1, 4))
console.log(intervalo_while(1, 4))
console.log('========== VERSÃO COM USO DE BUILT-INS ==========')
console.log(intervalo_for_built_in(1, 4))
console.log(intervalo_while_built_in(1, 4))
