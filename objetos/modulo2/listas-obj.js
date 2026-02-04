const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123456789101',
    turma: 'JavaScript',
    telefones: ['5100020202', '52220202020'],
    bolsista: true,
    endereço: [{
        rua: 'Federação Motora',
        número: 444, 
        complemento: 'É uma casa, slk',
        bairro: 'Casa Nobre',
    }]
}

estudante.endereço.push({
    rua: 'Rua Dona Clotilde',
    número: 71, 
    complemento: '',
})

/*
console.log(estudante.endereço[0])
console.log(estudante.endereço[1])
*/

const listaEnderecosComComplemento = estudante.endereço.filter ((endereço) => endereço.complemento)
console.log(listaEnderecosComComplemento) //fica DENTRO de um array
