//Function Declation
function somar(a, b) {
    return a + b;
}

console.log(somar(4,2)); //6


//Function Expression
//forma mais usada 
const somar2 = function(a, b) {
    return a + b;
}

somar2(4,2) //6


//usando arrow Function
const somar3 = (a, b) => a + b;
const resultado = somar3(2, 2);
console.log(resultado);

//exemplo 2
const quadrado = a => a * 2;
console.log(quadrado(2));


/* 
IIFE - Immediately invoked Function Expression
Antes da introudução de modules e da implementação
do escopo de bloco, a forma mais comum utilizada para isolarmos
o escopo de um código JavaScript era através das chamadas IIFE's.
*/
var instrumento = 'Violão';

(function() {
    //código isolado do escopo global
    var instrumento = 'Guitarra';
    console.log(instrumento);                                                  
})();

console.log(instrumento);