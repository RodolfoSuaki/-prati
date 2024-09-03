// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.


const pedidos = [
    {
        cliente: "Giovana",
        produto: "mouse",
        quantidade: 10,
    },
    {
        cliente: "Pedro",
        produto: "teclado",
        quantidade: 32,
    },
    {
        cliente: "Bruno",
        produto: "headset",
        quantidade: 50,
    },
    {
        cliente: "Giovana",
        produto: "teclado",
        quantidade: 3,
    },
    {
        cliente: "Giovana",
        produto: "headset",
        quantidade: 1,
    },
    {
        cliente: "Bruno",
        produto: "mouse",
        quantidade: 4,
    },
]

let pedidoTotalCliente = {}
pedidos.forEach(pedido => {
    if(!pedidoTotalCliente[pedido.cliente]){
        pedidoTotalCliente[pedido.cliente] = 0
    }
    pedidoTotalCliente[pedido.cliente] += pedido.quantidade
})

console.log(pedidoTotalCliente)