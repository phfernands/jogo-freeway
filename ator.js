let colidiu = false;

//posição do ator
let xAtor = 160;
let yAtor = 553;

function mostraAtor() {
    image(imagemDoAtorUm, xAtor, yAtor, 38, 38);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if(podeSeMover()) {
            yAtor += 5;
        }
    }
}

function coalisaoComCarro() {
    for(let i = 0; i < imagemCarros.length; i++) {
        colidiu = collideRectRect(xCarros[i], yCarros[i], comprimento, largura, xAtor, yAtor, 30, 30);
        if(colidiu) {
            yAtor = 553;
            subtraiPontos();
        }
    }
}

function coalisaoComCarroFaixaContraria() {
    for(let i = 0; i < imagemCarrosFaixaContraria.length; i++) {
        colidiu = collideRectRect(xCarrosFaixaContraria[i], yCarrosFaixaContraria[i], comprimento, largura, xAtor, yAtor, 30, 30);
        if(colidiu) {
            yAtor = 553;
            subtraiPontos();
        }
    }
}

function podeSeMover() {
    return yAtor < 560;
}

