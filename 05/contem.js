//5. Crie uma função que recebe um vetor de inteiros e um número inteiro e retorne 
// verdadeiro se o número faz parte do vetor ou falso se não faz parte.
let numeros = [1,2,3,4,5,87,55,687];
let numeroHaEncontra = 55;

function encontraNumero (lista, numero) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
        if (numero === lista[i]){
            return true;
        }
    }
    return false;
}

const seHaNaLista = encontraNumero(numeros, numeroHaEncontra);

if (seHaNaLista) {
    alert(`O numero ${numeroHaEncontra} está na lista ${numeros}`);
} else {
    alert(`O numero ${numeroHaEncontra} não está na lista ${numeros}`);
}