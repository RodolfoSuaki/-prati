// Carrossel de depoimentos
const depoimentos = document.querySelectorAll(".depoimento");
let depoimentoAtual = 0;

function mostrarDepoimento(index) {
    depoimentos.forEach((depoimento, i) => {
        depoimento.style.display = i === index ? "block" : "none";
    });
}

function proximoDepoimento() {
    depoimentoAtual = (depoimentoAtual + 1) % depoimentos.length;
    mostrarDepoimento(depoimentoAtual);
}

mostrarDepoimento(depoimentoAtual);
setInterval(proximoDepoimento, 5000);

