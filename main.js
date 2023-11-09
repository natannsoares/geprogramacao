// Criada a função para tocar o som e fazer a busca pelo ID do som
function tocaSom(idElementoAudio) {
    // Pausa qualquer áudio em execução
    const audioEmExecucao = document.querySelector(".audio-em-execucao");
    if (audioEmExecucao) {
        audioEmExecucao.pause();
        audioEmExecucao.classList.remove("audio-em-execucao");
    }

    // Toca o novo áudio
    const novoAudio = document.querySelector(idElementoAudio);
    novoAudio.play();
    novoAudio.classList.add("audio-em-execucao");
}

// Constante das teclas buscando todos os botões da classe
const listaDeTeclas = document.querySelectorAll(".tecla");

// Criado o contador e o laço de repetição while tocando com o click
let contador = 0;
while (contador < listaDeTeclas.length) {
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_" + efeito;
    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}
