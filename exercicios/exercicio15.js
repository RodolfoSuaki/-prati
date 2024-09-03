// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.


const transacoes = [
    { tipo: "Entrada", valor: 500.00 },
    { tipo: "Saída", valor: 200.00 },
    { tipo: "Entrada", valor: 150.00 },
    { tipo: "Saída", valor: 80.00 },
    { tipo: "Entrada", valor: 300.00 },
    { tipo: "Saída", valor: 100.00 },
    { tipo: "Entrada", valor: 400.00 },
    { tipo: "Saída", valor: 250.00 },
]

let total = 0
transacoes.forEach(transacao => {
    if(transacao.tipo == "Entrada"){
        total += transacao.valor
    }
    else{
        total -= transacao.valor
    }
})

console.log(total)