// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.


const estoque = [
    {
        produto: "mouse",
        quantidade: 10,
        minimo: 1
    },
    {
        produto: "teclado",
        quantidade: 32,
        minimo: 5
    },
    {
        
        produto: "headset",
        quantidade: 50,
        minimo: 3
    },
    {
        produto: "tela",
        quantidade: 3,
        minimo: 5
    },
    {
        produto: "bateria",
        quantidade: 1,
        minimo: 2
    },
]

const estoqueAtualizado = []

estoque.forEach(produto => {
    if(produto.quantidade < produto.minimo){
        const novoProduto = {...produto,quantidade: produto.quantidade*2}
        estoqueAtualizado.push(novoProduto)
    }
    else{
        estoqueAtualizado.push(produto)
    }
})

console.log(estoqueAtualizado)
