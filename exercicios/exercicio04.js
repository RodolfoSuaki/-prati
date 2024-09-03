// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

const pessoas = [
    {
        nome: "Giovana",
        idade: 12,
        cidade: "Rio de Janeiro",
    },
    {
        nome: "Pedro",
        idade: 25,
        cidade: "São Paulo",
    },
    {
        nome: "Bruno",
        idade: 50,
        cidade: "Fortaleza",
    },
]

for (const pessoa of pessoas){
    console.log(pessoa)
}
