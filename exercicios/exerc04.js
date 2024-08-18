// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.



const prompt = require("prompt-sync")();

console.log("------------Bem-vindo ao menu interativo------------");
console.log("0 - Visualizar a base de dados dos clientes");
console.log("1 - Visualizar a base de dados de vendas");
console.log("2 - Visualizar a base de dados do RH");

let option;
do {
    option = parseInt(prompt('Digite um número para acessar o menu: '));

    switch (option) {
        case 0:
        console.log('A base de clientes está aqui.');
        break;
        case 1:
        console.log('A base de vendas está aqui.');
        break;
        case 2:
        console.log('A base do RH está aqui.');
        break;
        default:
        console.log('Opção inválida. Por favor, digite um número entre 0 e 2.');
    }
} while (option >= 0 && option <= 2);
