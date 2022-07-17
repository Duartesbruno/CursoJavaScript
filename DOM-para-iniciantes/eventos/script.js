/*

//addEventListener

const img = document.querySelector('img');

img.addEventListener('click', () => {       //assim seria uma funcao anonima
    console.log('clicou'); 
});


// exemplo de funcao com nome (usando exemplo do callback)

const img = document.querySelector('img');
function callback() {
    console.log('clicou');
}

img.addEventListener('click', callback);

*/

/*


//Event

const img = document.querySelector('img');

function callback(event) {                //em alguns codigos é comum ver a letra "e" em vez de "event"
    console.log(event);
}

img.addEventListener('click', callback);



const animaisLista = document.querySelector('animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget); //qualquer lugar que eu clicar vai retornar exatamente aquele elemento (.animais-lista) 
    console.log(event.target); //target mostra exatamente a onde eu cliquei em cima dentro daquele elemento
    console.log(event.type); //retorna o tipo do evento (neste caso 'click')
    console.log(event.path); //retorna o caminho a onde se encontra o elemento
}

animais.addEventListener('click', callbackLista);




//presentDefault()     : serve para mostar o acontecimento do evento previnindo o padrão

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno (event) {
    event.preventDefault();
    console.log('clicou');
    console.log(event);
    console.log(this);  //this acaba sendo a mesma coisa se colocar event.currentTarget    [tradução: alvo atual]
    console.log(this.getAttribute('href'));
};

linkExterno.addEventListener('click', handleLinkExterno);


*/



/*

DIFERENTES EVENTOS
Existem diversos eventos como click, 
scroll, resize, keydown, keyup, mouseenter e mais. 
Eventos podem ser adicionados a diferentes elementos, 
como o window e document também.


const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);  //click
h1.addEventListener('mouseenter', callback); //quando passa o mouse por cima
h1.addEventListener('mousemove', callback); // a cada movimento do mouse em cima do elemento dispara o evento

//windows sao eventos que ocorrem na pagina por completo 
window.addEventListener('scroll', callback); //scrollando
window.addEventListener('resize', callback); //dispara quando o document view é redimensionado (quando usuario aumento e diminui a tela)
window.addEventListener('keydown', callback); //precionar a tecla
window.addEventListener('keyup', callback); //solta a tecla

//https://developer.mozilla.org/en-US/docs/Web/Events



*/

/*

function handleKeyBoard(event) {
    if(event.key === 'a') {
        document.body.classList.toggle('azul');   //toggle : serve para adicionar quando não tiver e remover quando tiver
    } else if(event.key === 'v') {
        document.body.classList.toggle('vermelho');
    }
}

window.addEventListener('keydown', handleKeyBoard)    //keydown evento clicando em uma tecla

*/

const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.target); // target significa alvo
    console.log(event.target.getAttribute('src')); //pode tbm só pegar o src da img 
}


imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
});




