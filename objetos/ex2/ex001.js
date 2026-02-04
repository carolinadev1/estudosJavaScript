const pessoa = {
    nome: 'Mariana',
    idade: 15, 
    solteiro: true,
    hobbies: ['ler', 'cantar', 'dançar'],
    /*
     endereco: [{
        rua: 'Bento Golçalvez',
        cidade: 'São Chico',
        estado: 'RS',
    }]
    */
    pessoas: [{
        nome: 'Otávio',
        idade: 15,
        cidade: 'Maranhão',
    }]
}

/*
function mostrarInfoPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`)
    console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`)
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`)
    console.log(`Hobbies: ${pessoa.hobbies.join(', ')} (Tipo: ${typeof pessoa.hobbies})`)

    console.log(`Endereço: ${pessoa.endereco[0].rua} (Tipo: ${typeof pessoa.endereco.rua})`)
    console.log(`Endereço: ${pessoa.endereco[1].cidade} (Tipo: ${typeof pessoa.endereco.cidade})`)
    
}
   mostrarInfoPessoa(pessoa)
*/

function mostrarInfoPessoas(pessoas){
    console.log(`Nome: ${pessoa.pessoas[0].nome} (Tipo: ${pessoa.é})`)
}