/*
Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
Crie um objeto chamado livro com as seguintes propriedades: 
título, autor, ano de publicação e gênero.

Adicione a propriedade idadePublicacao diretamente ao objeto livro, 
representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.]

Exiba a string mostrarDetalhes no console para verificar se as informações,
incluindo a idade de publicação, são exibidas corretamente.
*/

// Pega o ano atual
var anoAtual = new Date().getFullYear();

// Cria o objeto livro
const livro = {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    anoDePublicacao: 1899,
    genero: 'romance, realismo',
};

// Adiciona a idade da publicação ao objeto
livro.idadePublicacao = anoAtual - livro.anoDePublicacao;

// Cria a string com os detalhes do livro
const mostrarDetalhes = `
Título: ${livro.titulo}
Autor: ${livro.autor}
Ano de Publicação: ${livro.anoDePublicacao}
Gênero: ${livro.genero}
Idade da Publicação: ${livro.idadePublicacao} anos
`;

// Exibe no console
console.log(mostrarDetalhes);
