let imagemDaEstrada;
let imagemDoAtorUm;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDoPonto;
let somDaCoalizao;

function preload() {
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtorUm = loadImage("imagens/ator-1.png");
    imagemCarro = loadImage("imagens/carro-1.png");
    imagemCarro2 = loadImage("imagens/carro-2.png");
    imagemCarro3 = loadImage("imagens/carro-3.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3];
    imagemCarrosFaixaContraria = [imagemCarro, imagemCarro2, imagemCarro3];

    somDaTrilha = loadSound("sons/trilha.mp3");
    somDoPonto = loadSound("sons/pontos.wav");
    somDaCoalizao = loadSound("sons/colidiu.mp3");
}