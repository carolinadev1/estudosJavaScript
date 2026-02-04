/*
Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
Depois, adicione uma nova propriedade chamada avaliacao. 
Esta propriedade deve ser inicializada como null

No final do arquivo livro.js, adicione uma avaliação ao objeto.
Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

*/
const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'O Pequeno Principe',
    autor: 'Antoine de Saint-Exupéry',
    anoDePublicacao: '1943',
    genero: 'conto de fadas',
    idadeDePublicacao: anoAtual - 1943
}

livro.avaliacao = 'O livro é uma das obras mais conhecidas no mundo literário. Quem nunca leu, deveria ler.';

console.log(livro)