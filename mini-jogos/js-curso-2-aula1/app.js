//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

/*
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

*/

function gerarOlaMundo() {
    console.log('Olá, mundo!');
}

function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}

function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);