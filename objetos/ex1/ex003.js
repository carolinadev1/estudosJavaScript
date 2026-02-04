/*
Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro 
e imprimir no console os detalhes do livro.
*/
const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'O Pequeno Principe',
    autor: 'Antoine de Saint-Exupéry',
    anoDePublicacao: '1943',
    genero: 'conto de fadas',
    idadeDePublicacao: anoAtual - 1943
}

console.log('Informações do Livro:')
console.log('Título: ' + livro ['titulo'])
console.log('Autor: ' + livro ['autor'])
console.log('Ano de Publicação: ' + livro ['anoDePublicacao'])
console.log('Genêro: ' + livro ['genero'])
console.log('Idade De Publicação: ' + livro ['idadeDePublicacao'])