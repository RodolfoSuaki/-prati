// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.


const carrinho = {
    itens: [
        {
            nome: "Calça",
            quantidade: 2,
            precoUnitario: 35.0
        },
        {
            nome: "Camiseta",
            quantidade: 4,
            precoUnitario: 20.50
        },
        {
            nome: "tenis",
            quantidade: 2,
            precoUnitario: 102.90
        },
        {
            nome: "Boné",
            quantidade: 2,
            precoUnitario: 15.00
        },
    ]
}

let valorTotalCarrinho = 0
carrinho.itens.forEach(produto => {
    const valorTotalProduto = produto.quantidade*produto.precoUnitario
    valorTotalCarrinho += valorTotalProduto
})

console.log(valorTotalCarrinho)