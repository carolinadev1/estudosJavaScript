/*

alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

*/

/*
//DESAFIO 1 - NÃO JURAVA QUE FOSSE APENAS ISSO, PENSEI QUE FOSSE UM PUTA CÓDIGO KKK
console.log ('Boas vindas ao Desafio!');
}
*/

/*
//DESAFIO 2 - ACERTEI

let nome = Carolina;  
    alert(`Olá, ${nome}!`);

*/

/*
//DESAFIO 3 - ACERTEI
let nome = 'arolina';  
    alert(`Olá, ${nome}!`);
*/

/*
//DESAFIO 4 - ESSE PRECISO MELHORAR

let linguagemPreferida = prompt('Qual  a linguagem de programação que você mais gosta?');
console.log(linguagemPreferida); //console.log é om IMPRIMIR A MENSAGEM.

*/

/*

//DESAFIO 5 - SÓ FALTAVA UM DETALHE (RESULTADO DA SOMA)
let valor1 = 5;
let valor2 = 7;
let resultado = 5 + 7; 

resultado = valor1 + valor2;
console.log(`A soma do valor ${valor1}, mais ${$valor2} deu o resultado de ${resultado}.`);

*/

/*
//DESAFIO 6
let valor1 = 9;
let valor2 = 3;
let resultado = 9-3;

console.log (`A subtração do valor ${valor1}, menos ${$valor2} deu o resultado de ${resultado}.`);

*/

/*
//DESAFIO 7 - ACERTEI
let idade = prompt('Digite a sua idade:');
let idade2 = 18;

if(idade >= 18){
    alert('Você é maior de idade.');
} else {
    alert('Você é menor de idade.');
}

*/

/*

//DESAFIO 8 - EU FIZ ASSIM, O CÓDIGO DEU CERTO
let numero = prompt('Verifique o número positivo, negativo ou zero');
let numeroS = 1; 2, 3;
let numeroSS = -1; -2; -3;

if(numero >= numeroS){
    alert('Os números são positivos');
} else{
    alert('Os números são negativos');
}

*/

/*

//DESAFIO 9 - PRECISO MELHORAR
    //DICA: O WHILE É PARECIDO COM O IF/ELSE

let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

*/

/*

//DESAFIO 10 - ESSA EU ACERTEI
let nota = 4;

if (nota >= 5){
    alert('Aluno foi Aprovado!');
} else {
    alert('Aluno foi Reprovado :(');
}

*/

/*

//DESAFIO 11 - MELHORAR NESSA AÍ
let numeros = Math.random();
console.log(numeros); //O CONSOLE.LOG ELE PUXA E IMPRIME O QUE TÁ ESCRITO, AHHHHHHH.

*/

//DESAFIO 12
let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);


//DESAFIO 13