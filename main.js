//criado a função para tocar o som e feito a busca id do som
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

//constante das teclas com busca de todos os botões da classe
const listaDeTeclas = document.querySelectorAll(".tecla");

//criado o contador e o laço de repetição while tocando com o click
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = '#som_${efeito}';
    tecla.onclick = function(){
        tocaSom(idAudio)
    }
}