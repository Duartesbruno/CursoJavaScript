// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector('img');
const imgTop = primeiraImg.offsetTop;
console.log(imgTop);




// Retorne a soma da largura de todas as imagens
function somaImagens() {
    const todasImgs = document.querySelectorAll('img');
    let soma = 0;
    todasImgs.forEach((img) => {
        soma = soma + img.offsetWidth;
    });
        console.log(soma);
}

window.onload = function () {      //window.onload : usado para esperar toda pagina carregar e depois dispara a função
    somaImagens();
}



// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)


const links = document.querySelectorAll('a');
links.forEach((link) => {
    const linkWidht = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidht >= 48 && linkHeight >= 48) {
        console.log(link, 'Recomendado para telas utilizadas com o dedo')
    } else {
        console.log(link, 'Nao recomendado para telas utilizadas com o dedo')
    }
});





// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const mobile = window.matchMedia('(max-width: 720px)');
if(mobile.matches) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}



//um exemplo seria ativar e desativar menu hamburguer