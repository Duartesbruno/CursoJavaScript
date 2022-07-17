// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);




// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector('.faq');
const primeiroDt = document.querySelector('dt');
console.log(primeiroDt);





// Selecione o DD referente ao primeiro DT

const proximoDd = primeiroDt.nextElementSibling;
console.log(proximoDd);




// Substitua o conteúdo html de .faq pelo de .animais

//faq ja esta selecionado acima só falta selecionar animais

const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;

/*
se for:
faq.innerHTML = '';
tira todo o conteudo de faq
*/

