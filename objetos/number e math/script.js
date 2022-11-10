//Number.isNaN() e Number.isInteger();
/* isNaN() é um método de Number, ou seja,  
não faz parte to protótipo. ( é uma propriedade do objeto global, não re-escrevível, não configurável e não enumerável).
isInteger() verifica se é uma integral.
*/

Number.isNaN('ds'); //false
Number.isNaN(10); //false
Number.isInteger('ds'); //false
Number.isInteger(10); //true
Number.isInteger(10.50); //false  pois não é uma integral(n inteiro)


//Number.parseFloat() e Number.parseInt()
/* parseFloat() serve para retornarmos um número a partir de uma string. 
A String deve começar com um número. parseint recebe também um segundo parâmetro 
que é o radix, 10 é para decimal. */

/* Padrão antigo */
parseFloat('99.50'); //99.5

/* padrão novo */
Number.parseFloat('99.50'); //99.5
Number.parseFloat('100 Reais'); //100
Number.parseFloat('R$ 100'); //NaN

parseInt('99.50'); //99
parseInt(5.43434565555); //5
Number.parseInt('100 Reais') //100

//pode usar parametro Radix, 10 é para decimal (10 esta falando com casas decimais)
Number.parseFloat('95.77', 10); //95.77
parseInt('99.50', 10); //99
parseInt(5.564654645, 10); //5



//n.toFixed(decimais)
/* Arredonda o número com base 
no total de casas decimais do argumento. */

const preco = 2.5;
preco.toFixed(); //'3'

const preco1 = 2.49
preco1.toFixed(); //'2'

const preco2 = 100.465
preco2.toFixed(1); //'100.5'
preco2.toFixed(2); //'100.47'
preco2.toFixed(3); //'100.465'

(99.99).toFixed(); //'100'
(99.99).toFixed(1); //'100.0'
(99.99).toFixed(2); //'99.99'

/* usando essa funcao sai como string, 
para transformar em numero colocar o " + " na frente */
+preco.toFixed(); //3    (numero 3 e não string '3')


//n.toString(radix)
/* Transforma o número em uma string com base no Radix. 
Use o 10 para o sistema decimal */

const numero = 2.99;
numero.toString(); //'2.99'
numero.toString(10); //'2.99'



//n.toLocaleString(lang, options);
/* Formata o número de acordo com 
a língua e opções passadas.*/

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(valor);


console.log((50.55).toLocaleString('en-US', {style: 'currency', currency: 'USD'}))



//Math
/* É um Objeto nativo que possui propriedades 
e métodos de expressões matemáticas comuns. */

Math.PI //3.141592653589793
//para pegar somente 2 números depois da virgula
Math.PI.toFixed(2); //3.14

Math.abs(-5.5); //5.5      retorna valor absoluto, transforma negativo em positivo
Math.ceil(4.833); //5      arredonda sempre pra cima sem usar critério matematico
Math.ceil(4.3); //5
Math.floor(4.833); //4     arredonda sempre para baixo sem usar critério matematico
Math.floor(4.3); //4
Math.round(4.833); //5     arredonda usando o criterio matematico
Math.round(4.3); //4




//Math.max(), Math.min() e Math.random();
/*max() retorna o maior número de uma lista de argumentos, 
min() o menor número e random() um número aleatório entre 0 e 1. */

Math.max(5,3,10,42,2); //42
Math.min(5,3,10,42,2); //2

Math.random(); //nuemro aleatorio 0 a 1

Math.floor(Math.random() * 10); //numero aleatorio entre 0 e 10
Math.floor(Math.random() * 100); //numero aleatorio entre 0 e 100
Math.floor(Math.random() * 500); //numero aleatorio entre 0 e 500

//Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
//Math.floor(Math.random() * (max - min + 1)) + min;