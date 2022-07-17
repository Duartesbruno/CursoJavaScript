//Height e Widht

const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;  //distancia exta da altura contando com o que esta escondido pelo scroll
const animaisTop = listaAnimais.offsetTop; //distancia exata entre elemento e o top da pagina

console.log(height);
console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft; //distancia exata do primeiro H2(raposa) a margin esquerda da tela
console.log(h2Left);

const h2Rect = primeiroH2.getBoundingClientRect();
console.log(h2Rect.top);

if(h2Rect.top < 0) {
  console.log('Passou do elemento');
}


console.log(
  window.innerWidth, //somente a largura da pagina
  window.innerHeight, //somente a altura da tela da pagina
  window.outerHeight, //soma com altura até da barra de endereço altura total.
  window.outerWidth, // largura total da pagina e se tiver com inspecionar abertoe ele calcula igual a largura
);


/*matchMedia()
Utilize um media-qurie como no CSS para verificar a largura do browser
*/

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px');
} else {
  console.log('Tela maior que 600px');
}
