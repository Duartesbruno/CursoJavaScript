/*
const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');
console.log(h1.innerHTML); //innerHTML só busca o que esta dentro da tag
console.log(h1.outerHTML); //outerHTML pega dentro e tudo de fora

//h1.innerHTML = '<p>Novo Título</p>'; //substitui o titulo selecionado e coloca dentro do conteudo
//h1.outerHTML = '<p>Novo Título</p>'; //substitui o titulo seleciiando e colca fora do conteudo

*/
/*
Transversing  - como navegar pelo DOM, utilizando suas propriedades e métodos.

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho


*/
/*
//clonar

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');
faq.appendChild(cloneH1);

*/