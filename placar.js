let meusPontos = 0;

function mostraPlacar() {
    fill(color(255, 255, 0));
    text(meusPontos, 600, 40);
    textSize(40);
}

function somaPontos() {
    if(yAtor < -10) {
        yAtor = 553;
        meusPontos += 1;
        somDoPonto.play();
    }
}

function subtraiPontos() {
    meusPontos -= 1;
    somDaCoalizao.play();
    if(meusPontos < 0) {
        meusPontos = 0;
    }
}