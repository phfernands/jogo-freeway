//lista dos carros
let xCarros = [700, 700, 700];
let yCarros = [65, 151, 230];

//lista de carros na faixa contraria
let xCarrosFaixaContraria = [40, 40, 40];
let yCarrosFaixaContraria = [321, 400, 479];

//velocidades dos carros
let velocidadeCarros = [2, 3, 4];

//dimensões do carro
let comprimento = 60;
let largura = 50;

function mostraCarro() {
    for(let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimento, largura);
    }
}

function mostraCarroFaixaContraria() {
    for(let i = 0; i < imagemCarrosFaixaContraria.length; i++) {
        image(imagemCarrosFaixaContraria[i], xCarrosFaixaContraria[i], yCarrosFaixaContraria[i], comprimento, largura);
    }
}

function movimentaCarro() {
    for(let i = 0; i < xCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];

        if(xCarros[i] + comprimento < 0) {
            xCarros[i] = 850;
        }
    }
}

function movimentaCarroFaixaContraria() {
    for(let i = 0; i < imagemCarrosFaixaContraria.length; i++) {
        xCarrosFaixaContraria[i] += velocidadeCarros[i];

        if(xCarrosFaixaContraria[i] > 800) {
            xCarrosFaixaContraria[i] = -60;
        }
    }
}
