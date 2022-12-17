// 3. Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.
// let numerosPerfeitos = []

let numerosPerfeitos = [];
let i = 1;

while (numerosPerfeitos.length < 4) {
    i++
    if (perfeito(i)) {
        numerosPerfeitos.push(i)
    }
}

function perfeito (valor) {
    let soma = 0;
    for (let i = 1; valor > i; i++) {
        if (valor % i === 0) {
            soma = soma + i
        }
    }
    if (soma == valor) {
        return true;
    } else {
        return false;
    }
}

console.log(numerosPerfeitos)