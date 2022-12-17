// 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
// inteiros e no final mostre a soma de todos os elementos.

const lista = [1,1,1,1,1,4,5,6,7,8,9,4,2,3,5,6,1,2,3,2]
let soma = 0

for (i = 0; i < lista.length; i++) {
    soma += lista[i];
}

console.log(soma)