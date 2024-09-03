// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.


//Criando o objeto livro
const book = {
    title: "The Lord of the Rings: The Two Towers",
    author: "J.R.R. Tolkien",
    yearOfPublication: "1954",
    genre: "Fantasy"
}

console.log(book)

for( i in book){
    if(!book.hasOwnProperty('editora')){
        book.editora = "George Allen & Unwin"
    }
}

console.log(book)
