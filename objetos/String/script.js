/* const comida = 'Pizza';  //string
const liquido = new String('Agua');  //constructor string [Objeto]

console.log(liquido.length);  //4 [length: comprimento do vetor(posições)]
console.log(comida.length); //5
console.log(liquido[1]); //g 
console.log(comida[0]); //P


const frase = 'A melhor comida';
console.log(frase[0]); //A
console.log(frase.length); //15
console.log(frase[frase.length -1]);    //-1 pois a primeiro posicao é o "0"


const linguagem = 'JavaScript';
console.log(linguagem.charAt(0)); //J    [charAt: caracter em...]
console.log(linguagem.charAt(linguagem.length -1)); //t 


const frase2 = 'A melhor linguagem é ';
const nome = 'JavaScript';

const fraseFinal = frase2.concat(nome, '!!!');
//const fraseFinal = frase2 + nome + '!!!';  //mesma coisa que a de cima mas em cima esta usando o metodo concat
console.log(fraseFinal);


/* str.includes(search, position)
   Procura pela string exata dentro de outra string. 
   A procura é case sensitive.
   Exemplo abaixo:
*/

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(fruta.includes(listaFrutas)); //false [não possui essa lista dentro de fruta]
console.log(listaFrutas.includes(fruta)); //true [possui Banana dentro da listaFrutas]


/* str.endsWith(search) "termina com" e str.startsWith(search) "comeca com"
    Exemplos abaixo:
*/
const cor = 'Preta';
cor.endsWith('ta'); //true
cor.startsWith('Pre'); //true
cor.startsWith('ta'); //false 

 
/* str.slice(start, end) - cortar a string de acordo 
com os valore de start e end*
Exemplos abaixo: */
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // Cleinte
transacao1.slice(-4); // ente    [4 ultimos caracteres]
transacao1.slice(3, 6); // ósi

transacao3.slice(0, -1); // Taxa de camisa    [cortar o ultimo caracter]


/* str.substring(strat, end) 
Ele funciona como slice só que com numeros negativos ele não se comporta bem
Exemplos abaixo: */

const linguage = 'JavaScript';
linguage.substring(3,5); // aS
linguage.substring(0, 4); // Java
linguage.substring(4); // Script
linguage.substring(-3) // JavaScript


/* str.indexOf(search) e str.lastIndexOf(search) 
Exemplos abaixo: */
const instrumento = 'Guitarra';
instrumento.indexOf('r'); // 5  [retorna sempre o primeiro que aparecer]
instrumento.lastIndexOf('r') // 6  [retorna até o ultimo a aparecer]
instrumento.indexOf('ta'); // 3


