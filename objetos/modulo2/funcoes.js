const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123456789101',
    turma: 'JavaScript',
    telefones: ['5100020202', '52220202020'],
    bolsista: true,
    media: 7.5,
    estaAprovado: function (mediaBase){
        return this.media >= mediaBase ? true : false
    }
}
console.log(estudante.estaAprovado(7))
