//window.alert('É isso mesmo!');

const href = window.location.href;
console.log(href);

if(href === 'http://127.0.0.1:5500/o-que-e-o-dom/') {
    console.log('É igual!');
}

// window w document são os objetos pricipais do DOM, 
//boa parte das manipulações são feitas usando seus metodos e propriedades.


//para selecionar uma tag dentro do HTML(para modificar o conteudo):

  //variavel          //objeto  //metodo    //argumento
const h1Selecionado = document.querySelector('h1')



/*
h1Selecionado.addEventListener('click', function(){
    console.log('Clicou em ', h1Selecionado.innerText);
}) 
*/

//ou

function callbackh1() {
    console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);
