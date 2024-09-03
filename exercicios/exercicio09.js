// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.


const clientes = [
    {
        nome: "Giovana",
        idade: 10,
        cidade: "Rio de Janeiro",
    },
    {
        nome: "Pedro",
        idade: 32,
        cidade: "São Paulo",
    },
    {
        nome: "Bruno",
        idade: 50,
        cidade: "Fortaleza",
    },
]

let count = 0;
clientes.forEach(cliente => {
    if(cliente.idade > 30){
        count++
    }
})

console.log(count)
