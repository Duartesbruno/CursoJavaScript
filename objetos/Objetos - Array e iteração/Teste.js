// Transformando objetos em Array(array-like)


/* Condicoes que o objeto precisa para ser tranformado em um array:
precisa ter indices numericos e ter a propriedade length */

const objeto = { 0: "Alexandre", 1: "Joao", 2: "Maria", length: 3 };
const names = Array.prototype.slice.call(objeto);                        //maneira mais rapida
console.log(names)


//Outra maneira


const names2 = Array.from(objeto);                                      //possui funcionalidades especificas como:
console.log(names2)


//funcionalidades especificas:
Array.from([1, 2, 3], (value, key) => console.log(value));      //usando Array - callback trabalhando como se fosse um .map

Array.from(objeto, (value, key) => console.log(value));      //usando Objeto - callback trabalhando como se fosse um .map - transforma o obejto em array e busca



/*Descomplicando call, apply e bind 
Link: https://imasters.com.br/javascript/descomplicando-call-apply-e-bind-em-javascript
*/