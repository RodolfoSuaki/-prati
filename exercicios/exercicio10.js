// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.


const vendas = [
    {
        produto: "mouse",
        quantidade: 5,
        valor: 600,
    },
    {
        produto: "Teclado",
        quantidade: 3,
        valor: 700,
    },
    {
        produto: "Headset",
        quantidade: 10,
        valor: 1000,
    },
]

let valorTotaldeVenda = 0;
vendas.forEach(venda => {
    const valorTotalDeVendaPorProduto = venda.valor * venda.quantidade
    console.log(`O valor total da venda do produto ${venda.produto} é ${valorTotalDeVendaPorProduto}`)
    valorTotaldeVenda += valorTotalDeVendaPorProduto
})

console.log(`O valor total da venda de todos os produtos é ${valorTotaldeVenda}`)