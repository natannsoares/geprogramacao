function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

// Constante das teclas buscando todos os botões da classe
const listaDeTeclas = document.querySelectorAll(".tecla");

// Loop for...of para associar a função de tocar som ao clique de cada tecla
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`; 
    tecla.onclick = function() {
        tocaSom(idAudio);
    };
    tecla.onkeydown = function(evento){
        if(evento.code != 'Tab'){ 
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

