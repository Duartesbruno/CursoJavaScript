const comida = 'Pizza';
const agua = new String('Agua');


console.log(comida.length); //5
console.log(agua.length); //4


const frase = 'A melhor comida';

console.log(frase[3]); //e
console.log(frase[frase.length - 1]); //a


//str.charAt(n)
//Retorna o caracter de acordo com o index de (n).

const linguagem = 'JavaScript';

linguagem.charAt(0); //J    traducao: charAt : caracter em
linguagem.charAt(2); //v
linguagem.charAt(linguagem.length - 1); //t



//concatenar strings
//str.concat(str2, str3, ...)
const frase1 = 'A melhor linguagem é ';

const fraseFinal = frase1 + linguagem; //modo comum
console.log(fraseFinal);

const fraseFinal2 = frase1.concat(linguagem, '!!!');
console.log(fraseFinal2);



//str.includes(search, position)         position conta por caracter
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranaja';

listaFrutas.includes(fruta); //true
fruta.includes(listaFrutas); //false

listaFrutas.includes(fruta, 10); //true
listaFrutas.includes(fruta, 11); //false



//str.endsWith(search) e str.startsWith(search)
//termina com    e   comeca com
const esporte = 'Futebol';

esporte.endsWith('tebol'); //true
esporte.endsWith('Fu'); //false

esporte.startsWith('Fu'); //true
esporte.startsWith('bol'); //false


//str.slice(start, end)    //vai percorrer cada posicao de caracter colocar valor de inicio e de final
const transacao1 = 'Depósito de Cliente';
const transacao2 = 'Depósito de Fornecedor';
const transacao3 = 'Taxa de Camisas';

transacao1.slice(0, 3); //Dep
transacao1.slice(12, 19); //cliente

transacao2.slice(-10); //Fornecedor
transacao2.slice(9, 11) //de

transacao3.slice(8); //Camisas
transacao3.slice(0, -1); //Camisa
transacao3.slice(-1); //s



//str.substring(start, end)   Funciona igual slice, mas com numeros negativos não funciona
const lingProgram = 'JavaScript';

lingProgram.substring(0, 4); //Java
lingProgram.substring(3, 5); //aS
lingProgram.substring(4); //Script
lingProgram.substring(-4); //JavaScript   não da erro mas não altera a string



//str.indexOf(search) e str.lastindexOf(search)   Retorna o index da string, assim que achar o primeiro resultado ele já retorna. 
//No caso do lastindexOf ele retorna o último resultado.
const instrumento = 'Guitarra';

instrumento.indexOf('r'); //5
instrumento.lastIndexOf('r') //6
instrumento.indexOf('ta'); //3



//str.padStart(n, string) e str.padEnd(n, str)
//Aumenta o tamanho da string para o valor de n.

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
//interação com cada item da lista
listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'));
})


//interação com cada item da lista
listaPrecos.forEach((preco) => {
    console.log(preco.padEnd(20, '-.-'));
})



//structuredClone.repeat() 
//Repete a string (n) vezes.
const palavra = 'Ta'
console.log(palavra.repeat(5)); //TaTaTaTaTa


//str.replace(regexp|substr, newstr|function)
//Troca parte da string por outra. Podemos usar 
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens);


let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // R$ 1200.43
console.log(preco);


const listaItens2 = 'Camisas Bones Calças Bermudas Vestidos'
const arrayItens = listaItens2.split(' ');
console.log(arrayItens);


const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
console.log(htmlArray);

const novoHtml = htmlArray.join('section');
console.log(novoHtml);



//str.toLowerCase() e str.toUpperCase()
//Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); //true
(sexo2.toLowerCase() === 'feminino'); //true
(sexo3.toLowerCase() === 'feminino'); //true



//str.trim(), str.trimStart(), str.trimEnd()
//Remove espaço em branco do início ou final de uma string.
const valor = '  R$ 23.00  '
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00  '
valor.trimEnd(); // '  R$ 23.00'







