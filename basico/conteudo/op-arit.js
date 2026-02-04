const notaPrimeiroBi = 9
const notaSegundoBi = 6.7
const notaTerceiroBi = 7.5
const notaQuartoBi = 10

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + 
notaQuartoBi) / 4 //dividimos por 4

if(media >= 7){ //comparação
    media += media *0.11111111111111111111 //+= é a atribuição da direita (o vezes) pra esquerda
}

console.log(`o valor da média é ${media.toFixed(1)}`)