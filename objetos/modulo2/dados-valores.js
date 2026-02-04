const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123456789101',
    turma: 'JavaScript',
    telefones: ['5100020202', '52220202020'],
    bolsista: true,
}

console.log(estudante.telefones[0])

estudante.endereço = {
    rua: 'Federação Motora',
    número: 444, 
    complemento: '', 
    bairro: 'Casa Nobre',
}

console.log(estudante.endereço.complemento)