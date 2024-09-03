// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.


const empresa = {
    departamentos: [
        {
            nome: "Marketing",
            funcionarios: [
                { nome: "João Silva", cargo: "Analista de Marketing", idade: 30, salario: 5000, dataAdmissao: new Date(2020, 1, 1), projetos: ["Campanha de Lançamento", "Análise de Mercado"] },
                { nome: "Maria Oliveira", cargo: "Gerente de Marketing", idade: 35, salario: 8000, dataAdmissao: new Date(2018, 11, 15) },
                
            ]
        },
        {
            nome: "Desenvolvimento",
            funcionarios: [
                { nome: "Pedro Santos", cargo: "Desenvolvedor Front-end", idade: 25, salario: 6000, tecnologias: ["React", "Angular"] },
                { nome: "Ana Souza", cargo: "Desenvolvedora Back-end", idade: 32, salario: 7000, tecnologias: ["Node.js", "Python"] },
                
            ]
        },
        {
            nome: "Recursos Humanos",
            funcionarios: [
                { nome: "Carla Pereira", cargo: "Analista de RH", idade: 28, salario: 4500, dataAdmissao: new Date(2021, 3, 15) },
                { nome: "Bruno Almeida", cargo: "Gerente de RH", idade: 38, salario: 9000, dataAdmissao: new Date(2017, 10, 1) }
            ]
        },
        {
            nome: "Finanças",
            funcionarios: [
                { nome: "Amanda Santos", cargo: "Contadora", idade: 30, salario: 6500, dataAdmissao: new Date(2022, 2, 5) },
                { nome: "Felipe Costa", cargo: "Analista Financeiro", idade: 27, salario: 5500, dataAdmissao: new Date(2020, 8, 20) }
            ]
        }
    ]
};

for (const departamento of empresa.departamentos) {
    for (const funcionario of departamento.funcionarios) {
        console.log(`\nInformações de ${funcionario.nome}:`);
        for (const propriedade in funcionario) {
            console.log(`${propriedade}: ${funcionario[propriedade]}`);
        }
    }
}