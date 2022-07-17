// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35
console.log(total);

// Crie duas expressões que retornem NaN
var n = '10 é numero' / 5;
var n2 = 'isso' * 'aquilo'; 
console.log(n, n2);

// Somar a string '200' com o número 50 e retornar 250

//var total = +'200' + 50;

var num1 = +'200', 
    num2 = 50, 
    total = num1 + num2;
console.log(total);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(++incremento);

// Como dividir o peso por 2?
var numero = +'80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2; 


console.log(`O Peso dividido por dois é igual a ${pesoPorDois}${unidade}.`)

