/*
Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, 
verificando se as informações atualizadas,
sem a avaliação, são exibidas corretamente.
*/

const livro = {
    titulo: 'O Pequeno Principe',
    autor: 'Antoine de Saint-Exupéry',
    anoDePublicacao: '1943',
    genero: 'conto de fadas',
    idadeDePublicacao: '80 anos',
    avaliacao: 'O livro é uma das obras mais conhecidas no mundo literário. Quem nunca leu, deveria ler.'
}

delete livro.avaliacao

console.log(livro)