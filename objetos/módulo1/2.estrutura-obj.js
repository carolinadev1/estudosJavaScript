const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123456789101', //use o '' com string, acessando + rápido
    turma: 'JavaScript',
}

console.log(estudante.nome) //pegam apenas o nome do estudante
console.log(`o nome do estudante é ${estudante.nome}`)
console.log(`os três primeiros números do cpf são: ${estudante.cpf.substring(0, 3)}`)