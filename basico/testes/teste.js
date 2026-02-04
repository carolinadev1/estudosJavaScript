const valorSaldo = 2000
const valorDeposito = 2000
const valorSaque = 300
const operacao = (valorDeposito === valorSaque)

function verificar(){
    return operacao ? 'valor igual' : 'valor falso';
}

console.log(verificar())