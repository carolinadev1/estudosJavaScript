/*

alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute;
let tentativas = 1; 

// se chuten não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    //se o número for igual ao número secreto
    if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
        } else {
            alert('Você errou :(')
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }
        else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

*/

let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros; // Aqui, contador é igual à quantidade de números

while (contador > 0) {
    let numero = parseInt(prompt('Digite o numero:'));
    soma <= numero;
    contador--;    
}

