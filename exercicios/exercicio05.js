// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

const alunos = [
    {
        nome: "Giovana",
        nota1: 9,
        nota2: 6,
    },
    {
        nome: "Pedro",
        nota1: 5,
        nota2: 2,
    },
    {
        nome: "Bruno",
        nota1: 10,
        nota2: 9,
    },
]

for(const aluno of alunos){
    let media = (aluno.nota1 + aluno.nota2)/2
    console.log(`O aluno ${aluno.nome} teve a média ${media}!`)
}