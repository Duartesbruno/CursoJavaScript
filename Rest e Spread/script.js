/*
PARÂMETROS
Nem todos os parâmetros que definimos são utilizados quando uma função é executada,
devido a falta de argumentos. Por isso é importante nos prepararmos para caso estes 
argumentos não sejam declarados.
*/

//padrão ES5
/*
function perimetroForma(lado, totalLados) {
    totalLados = totalLados || 4;
    return lado * totalLados;
  }
  
  console.log(perimetroForma(10, 4)); // 40
  console.log(perimetroForma(10)); // NaN - pois esta faltando um parametro
*/

  //Com ES6 - Existe uma forma mais simples:

  function perimetroForma(lado, totalLados = 4) {
    return lado * totalLados;
  }
  
  console.log(perimetroForma(10, 4)); // 40
  console.log(perimetroForma(10)); // NaN - pois esta faltando um parametro


/*
  ARGUMENTS

  A palavra chave arguments é um objeto Array-like criado dentro da função.
  Esse objeto contém os valores dos argumentos.

    function perimetroForma(lado, totalLados = 4) {
    console.log(arguments)
    return lado * totalLados;
    }

    perimetroForma(10);
    perimetroForma(10, 4, 20);

 */



/*
PARÂMETRO REST

É possível declararmos uma parâmetro utilizando ... na frente do mesmo.
Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.


function anunciarGanhadores(...ganhadores) {
    ganhadores.forEach(ganhador => {
      console.log(ganhador + ' ganhou.')
    });
  }
  
  anunciarGanhadores('Pedro', 'Marta', 'Maria');
*/


/*
ÚNICO REST

Só é possível ter um único parâmetro rest e ele deve ser o último.

function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => {
      console.log(ganhador + ' ganhou um ' + premio)
    });
  }
  
  anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');
*/


/*
REST VS ARGUMENTS

Apesar de parecidos o parâmetro rest e a palavra arguments
possuem grandes diferenças. Sendo rest uma array real e arguments um objeto Array-like.


function anunciarGanhadores(premio, ...ganhadores) {
    console.log(ganhadores); //array
    console.log(arguments); //obj array-like
  }
  
  anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');
*/



/*
OPERADOR SPREAD

Assim como o rest, o operador Spread também utiliza os ... para ser ativado.
O spread irá distribuir um item iterável, um por um.

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];
console.log(comidas);
*/



/*
SPREAD ARGUMENT

O Spread pode ser muito útil para funções que recebem uma lista
de argumentos ao invés de uma array.
*/

const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); // 33

const listaNumeros = [1,13,21,12,55,2,3,43];
const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread); //55



/*
TRANSFORMAR EM ARRAY

É possível transformar itens iteráveis em uma array real com o spread.
*/

const btns = document.querySelectorAll('button');
const btnsArray = [...btns];
console.log(btnsArray);

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];
console.log(fraseArray);



/*
Efeito maquina de escrever usando spread.

function maquina(target) {
  const span = document.querySelector(target);
  const textArray = [...span.innerHTML]
  span.innerHTML = '';
  textArray.forEach((letter, index) => {
      console.log(letter)
      setTimeout(() => {
          span.innerHTML += letter;
      }, 100 * index)
  });
}

maquina('.maquina');
*/
