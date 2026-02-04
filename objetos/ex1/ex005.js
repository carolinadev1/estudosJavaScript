/*Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
Depois altere o gênero do livro para "Aventura".
*/

const livro = {
    titulo: 'O Pequeno Principe',
    autor: 'Antoine de Saint-Exupéry',
    anoDePublicacao: '1943',
    genero: 'conto de fadas',
    idadeDePublicacao: '80 anos',
}

livro.genero = 'Aventura'

console.log(livro.genero)