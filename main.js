//criado a função para tocar o som e feito a vusca id do som
function tocaSom(idElementoAudio){
    document.querySelector ("idElementoAudio").play();
}

//constante das teclas com busca de todos os botões da classe
const listaDeTeclas = document.querySelector(".tecla");

let contador = 0;
while (contador < listaDeTeclas.length) {
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_" + efeito;
    listaDeTeclas[contador].onclick = function (){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}