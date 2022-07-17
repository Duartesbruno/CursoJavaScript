// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeBruno = 26;
var idadeGuilherme = 28;

if(idadeBruno < idadeGuilherme) {
    console.log('Idade do Guilherme é maior!');

} else if(idadeBruno > idadeGuilherme) {
    console.log('Idade do Bruno é maior!');

} else {
    console.log('Idade é igual!');
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy //usa-se !! para verificar
var nome = 'Andre'; //truthy
var idade = 28; //truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207e6;  
var china = 1340e6;

if(brasil > china) {
    console.log('O Brasil tem mais habitantes!');

} else if(brasil < china) {
    console.log('A China tem mais habitantes!');

} else {
    console.log('Possuem o mesmo número de habitantes!');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');                    //verdadeiro
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');          //cão
} else {
  console.log('Falso');
}