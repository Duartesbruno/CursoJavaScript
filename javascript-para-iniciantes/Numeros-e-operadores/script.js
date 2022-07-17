var idade = 2e5;  //e tem a presisao de até 15dig depois disso ele arredonda
console.log(idade);

var soma = 100 + 50; //150
var subtracao = 100 - 50; //50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16
var modulo = 14 % 5; //4

//Lembrando que soma "+" em Strings serve para concatenar

var soma = '100' + 50; //10050
var subtracao = '100' - 50; //50
var multiplicacao = '100' * '2'; //200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

//é possivel verificar se uma variavel é NaN ou não com a função isNaN()
var testeNaN = 'Isso é 100' / 2;
console.log(testeNaN);
console.log(isNaN(testeNaN));

//binarios
var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; //50
var total3 = 20 / 2 * 5; //50
var total4 = 10 + 10 * 2 + 20 / 2; //40

//parênteses para priorizar uma expressão

//unarios
var incremento = 5;
console.log(incremento++); //5
console.log(incremento); //6

var incremento = 5;
console.log(++incremento); //6
console.log(incremento); //6

var decremento = 5;
console.log(decremento--); //5
console.log(decremento); //4

var decremento = 5;
console.log(--decremento); //4
console.log(decremento); //4




