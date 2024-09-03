// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.


const produtos = [
    {
        nome: "mouse",
        preco: 600,
        desconto: 10,
    },
    {
        nome: "Teclado",
        preco: 700,
        desconto: 10,
    },
    {
        nome: "Headset",
        preco: 1000,
        desconto: 10,
    },
]


produtos.forEach((produto) => {
    const valorDoDesconto = produto.preco*produto.desconto/100
    const novoValor = produto.preco - valorDoDesconto

    produto.preco = novoValor
    }
)

console.log(produtos)