

function tamanho(colecao) {
    let n_indices = 0
    for (let i of colecao) {
        n_indices++
    }
    return n_indices
}

console.log(tamanho([1, 2, 3]))
