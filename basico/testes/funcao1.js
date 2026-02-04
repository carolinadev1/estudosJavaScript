function somarDoisNumeros(numeroA, numeroB){
    return numeroA + numeroB
}

somarDoisNumeros(6, 2)

const resultado = somarDoisNumeros(6, 2)
console.log(resultado)

/*
function dividir(dividendo, divisor){
    return dividendo / divisor
    console.log('fim da função');
}

const resultado1 = dividir (10, 2)
console.log(`O resultado é ${resultado1}`)
*/

function dividir (dividendo, divisor){
    if(divisor !== 0){
        return dividendo / divisor
    } else {
        return "favor não dividir por zero"
    }
}   

const resultado1 = dividir(10, 5)
console.log(resultado1)
const resultadoZero = dividir (10, 0)
console.log(resultadoZero)