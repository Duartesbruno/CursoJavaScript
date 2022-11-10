//Construção de Arrays

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];


instrumentos[2]; //Violão
precos[1] //99

dados[0]; //Tipo 1
dados[0].toLocaleLowerCase(); //tipo 1
dados[0][0]; //T
dados[1][0]; //Carro
dados[2]('Ford');
dados[1][2].cor; //Azul
dados[1][2].preco //2000



const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari'; //atribui um novo valor na posição 2 (substituiu Honda por Ferrari)
carros[3] = 'Kia'; //acrescentou um valor na posição 3 (acaba aumentando o array)
carros[20] = 'Renault' //acrescenta um valor na posição 20 mais os espaços em brancos até chegar no numero 20 (aumenta o tamnho do array)

console.log(carros.length); //21 




const li = document.querySelectorAll('li');
console.log(li); //Retorna uma NodeList (construtor NodeList)

//transformando em array
const arrayLi = Array.from (li);
console.log(arrayLi); //Retorna um array



//Array.isArray()
/* Verifica se o valor passado é uma 
array e retorna um valor booleano */

let listLi = document.querySelectorAll('li');
Array.isArray(listLi); //false

listLi = Array.from(listLi); //Transformou em Array
Array.isArray(listLi); //true



//Array.of(), Array() e new Array()
//A palavra chave new não é necessaria para utilizar o construtir Array

Array.of(10); //[10]   cria um array com os argumentos passados
Array.of(1,2,3,4); //[1,2,3,4]
new Array(5); //[.....] cria um array vazio com 5 espaços]
Array(5); //funciona da mesma forma que o de cima
Array(1,2,3,4); //[1,2,3,4] passando mais de um argumento ele entende que é para criar um array com os argumentos inseridos





//Propriedades e Métodos do Prototype
/* [].length retorna o tamanho da array */

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; //3

frutas[0].length; //6 (posicao 0 é Banana)
frutas[1].length; //4 (posicao 0 é Pêra)
frutas[2].length; //2 
frutas[2][0].length; //8 (Uva Roxa)


//Métodos Modificadores [].sort()
/* Métodos modificadores(mutator methods). 
Além de retornarem um valor, eles modificam 
o array original. [].sort() organiza a pelo unicode*/
const instruMusic = ['Guitarra', 'Baixo', 'Violão'];
instruMusic.sort(); //coloca em ordem alfabetica
console.log(instruMusic); //['Baixo', 'Guitarra', 'Violão']

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort(); //ele organiza em caracter por caracter
console.log(idades);



//[].unshift() e [].push()
/* [].unshift() adiciona elementos 
ao início da array e retorna o lenght da mesma. 
[].push() adiciona elementos ao final da array e retorna o length da mesma*/
const auto = ['Ford', 'Fiat', 'VW'];
auto.unshift('Honda', 'Kia');
auto; //['Honda', 'Kia', 'Ford', 'Fiat', 'VW']

auto.push('Ferrari');
auto; //['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari]



//[].shift() e [].pop()
/* [].shift() remove o primeiro elemento da array e retorna o mesmo. 
[].pop() remove o último elemento da array e retorna o mesmo */
const comidas = ['Strogonoff', 'Pizza', 'Lasanha', 'Pastel'];
const primeiraComida = comidas.shift(); // 'Strogonoff'  o retorno da função é o item removido
comidas; //['Pizza', 'Lasanha', 'Pastel']

const ultimaComida = comidas.pop(); //'Pastel'   o retorno da função é o item removido
comidas; //['Pizza', 'Lasanha']


//[].reverse()
/* [].reverse() inverte os itens da 
array e retorna a nova array */
const numbers = [1, 2, 3, 4, 5];
numbers.reverse(); //[5, 4, 3, 2, 1]   retorna a ordem invertida e altera o array
numbers; //[5, 4, 3, 2, 1] 