
function setup() {
  createCanvas(800, 600);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  coalisaoComCarro();
  mostraCarroFaixaContraria();
  movimentaCarroFaixaContraria();
  coalisaoComCarroFaixaContraria();
  mostraPlacar();
  somaPontos();
}





