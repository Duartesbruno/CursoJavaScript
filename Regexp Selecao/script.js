/*
REGULAR EXPRESSION

Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições
de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las
nos métodos .replace() e .split().
*/

// Procura: a
const padraoRegexp = /a/;

const texto = 'JavaScript';
const novoTexto = texto.replace(padraoRegexp, 'B');
console.log(novoTexto) // JBvaScript


/*
LITERAL

Utilizar um caracter literal irá realizar uma busca específica deste caracter.
*/

// Procura: J seguido de a, v e a
const regexp = /Java/;

const novaPalavra = 'JavaScript'.replace(regexp, 'Type');
console.log(novaPalavra); // TypeScript


/*
FLAG: G

As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g,
que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão
e não apenas o primeiro. A flag deve ser colocada no final da expressão.
*/

// Procura: Todo a

const palavra = 'JavaScript'.replace(/a/g, 'i');
console.log(palavra); // JiviScript


/*
FLAG: I

Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas.
Isso significa que /a/ irá buscar por a e A.
*/

// Procura: Todo PE, Pe, pE e pe
const regexP = /Pe/gi;

const frase = 'Perdeu perdido'.replace(regexP, 'Ba');
console.log(frase); // Bardeu Bardido


/*
CHARACTER CLASS

Se colocarmos os caracteres entre colchetes, estamos definindo uma classe.
/[ab]/ irá procurar por a ou por b.
*/

// Procura: Todo a, A, i, I

const palavra1 = 'JavaScript'.replace(/[ai]/gi, 'u');
// JuvuScrupt

console.log(palavra1);



/*
CHARACTER CLASS E ESPECIAIS

Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento,
pois existem diversos casos especiais para os mesmos.
*/

// Procura: - ou .

'111.222-333-44'.replace(/[-.]/g, '');
// 11122233344



/*
UM OU OUTRO

Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.
*/

// Procura: B, seguido de r, a
// seguido de s ou z, seguido de i, l

'Brasil é com z: Brazil'.replace(/Bra[sz]il/g, 'Prazer');
// Prazer é com z: Prazer



/*
DE A À Z

O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z.
[0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.



// Busca por itens de a à z
const regexp = /[a-z]/g;

'JavaScript é a linguagem.'.replace(regexp, '0');
// J000S00000 é 0 000000000.

// Busca por itens de a à z e A à Z
const regexp = /[a-zA-Z]/g;

'JavaScript é a linguagem.'.replace(regexp, '1');
// 1111111111 é 1 111111111.

// Busca por números de 0 à 9
const regexpNumero = /[0-9]/g;

'123.333.333-33'.replace(regexpNumero, 'X');
// XXX.XXX.XXX-XX

*/



// https://www.origamid.com/slide/javascript-completo-es6/#/0901-regexp-selecao/25

const regexpCEP = /\d{5}[-\s]?\d{3}/g;

const ceps = [
  '00000-000',
  '00000 000',
  '00000000'
];

for(cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}





/*
Exemplo para colocar ponto a cada 3 numeros

 */
const number = 'R$ 100000000';
const formatNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); 
console.log(formatNumber);