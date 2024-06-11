const h1 = document.querySelector('h1');

console.log(Object.prototype.toString.call(h1)); // [object HTMLHeadingElement]




// const div = document.querySelector('div');   //busca primeira div
console.log(div.dataset);  //DOMStringMap {cor: 'azul', width: '500'}
console.log(div.dataset.cor); //azul



<div data-cor="azul" data-width="500">Uma Div</div>

// Ambos os valores selecionam a mesma div acima:

let div = documnet.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;
//DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor;    //'azul'
div.dataset.width;  // '500'
div.dataset.tempo = 1000;