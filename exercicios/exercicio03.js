// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

const filmes = {
    "Senhor dos Anéis: A Sociedade do Anel": {
        duracao: 178,
        genero: "Fantasia",
        ano: 2001,
    },
    "Harry Potter e a Pedra Filosofal": {
        duracao: 120,
        genero: "Fantasia",
        ano: 2003,
    },
    "Matrix": {
        duracao: 143,
        genero: "Ficção Científica",
        ano: 1998,
    }
}

function filtrarFilmes(filmes, duracaoDoFilme){
    const filmeFiltrado = {}
    for(const filme in filmes){
        if(filmes[filme].duracao > duracaoDoFilme){
            filmeFiltrado[filme] = filmes[filme]
        }
    }
    return filmeFiltrado
}

const filtrarPorDuracao = filtrarFilmes(filmes, 120)
console.log(filtrarPorDuracao)