let numeroSecreto = 2;
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');  
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let mensagemTentativas = `Você descobriu o número secreto após ${tentativas} ${palavraTentativa}!`;
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute;
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = ''; //campo deve ficar vazio
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo();
    tenativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}







