

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

// Apenas para repetir uma função
function recursividade_codigo_alfabeto(callback, colecao, codigo=97, obter_codigo) {
    let string = ''
    for (let i = 0; i < tamanho(colecao); i++) {
        string += callback(colecao[i], codigo, obter_codigo)} {
    }
    return string
}

const linguagem = 'javascript'
console.log(codigo_alfabeto(linguagem[0], 0, true))
console.log(recursividade_codigo_alfabeto(codigo_alfabeto, linguagem, 0, true))
