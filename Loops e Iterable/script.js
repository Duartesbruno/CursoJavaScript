/*
ITERABLE

São objetos que possuem o método [Symbol.iterator], geralmente no protótipo,
é dentro dele que a função que lida com a iteração será definida. Ex: Array,
String, NodeList, boa parte das Array-Like e outros.

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => console.log(headers));
*/



/*
FOR...OF

É possível fazemos um loop por cada iteração do objeto iterável utilizando
o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.
*/

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const fruta of frutas) {
  console.log(fruta);
}

for(const char of frase) {
  console.log(char);
}


/*
SPREAD E FOR...OF

Com o for loop podemos manipular cada um dos elementos do objeto iterável.
*/

const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
  btn.style.background = 'blue';
}

console.log(buttons) //nodeList
console.log(...buttons); //com spread faz um console em cada um dos butons


/*
APENAS ITERÁVEIS

O for...of não irá funcionar em um objeto comum que não seja iterável.


const carro = {
    marca: 'Honda',
    ano: 2018,
  }
  
  // Erro, não é Iterável
  for(const propriedade of carro) {
    console.log(propriedade);
  }

  */



  /*
  FOR...IN

  Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.
  */

  const carro = {
    marca: 'Honda',
    ano: 2018,
  }

  Object.defineProperties(carro, {
    rodas: {
        value: 4,
        enumerable: false,
    }
  })
  
  for(const key in carro) {   //puxa só as propriedades que estam com enumerable "true"
    console.log(key, carro[key]);
  }



  /*
  ARRAYS E FOR...IN

  Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.
  */
  const fruts = ['Banana', 'Morango', 'Uva'];

  for(const index in fruts) {
    console.log(index);
  }
  
  for(const index in fruts) {
    console.log(fruts[index]);
  }
  
  

  /*
  CHAVE E VALOR
  
  Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis.
  */

  const btn = document.querySelector('button');
  const btnStyles = getComputedStyle(btn);

  console.log(btnStyles);
  for(const style in btnStyles) {
    console.log(`${style}: ${btnStyles[style]}`);
  }




  /*
  Do / While

  Outro tipo de loop é o Do / While. não é muito utilizado
  */

  let i = 0;
  do {
    console.log(i++);
  } while(i <= 5);