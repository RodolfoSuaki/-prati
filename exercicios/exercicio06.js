// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.


const funcionarios = [
    {
        nome: "Giovana",
        cargo: "Desenvolvedora Front-end",
        salario: 4000,
    },
    {
        nome: "Pedro",
        cargo: "Analista de Dados",
        salario: 4500,
    },
    {
        nome: "Bruno",
        cargo: "Tech Lead",
        salario: 6000,
    },
]

function filtrarSalario(funcionarios, salario){
    const salarioFiltrado = []

    for (const funcionario of funcionarios){
        if(funcionario.salario > salario){
            salarioFiltrado.push(funcionario)
        }
    }
    return salarioFiltrado
}


const filtroDeSalario = filtrarSalario(funcionarios, 4200)
console.log(filtroDeSalario)
