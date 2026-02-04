const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123456789101',
    turma: 'JavaScript',
}

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante [infoEstudante] //receber dado que gente não sabe qual é
}

console.log(estudante['nome']) //acessa as infos da pessoa
console.log(estudante['cpf']) 