// Crie uma função para verificar se um valor é Truthy
function valorVerdadeiro(valor) {
  return !!valor;
}


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(valorLado) {
  //return lado * 4;
  TotalSoma = valorLado * 4;
  return TotalSoma;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
//return nome + ' ' + sobrenome;
}

// Crie uma função que verifica se um número é par
function Numpar(numero) {
  resto = numero % 2;
  if(resto === 0 ) {
    return 'É par!';

  } else {
    return 'É impar!';

  }
}


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function TipoDado(dado) {
  return `Tipo de dado é: ${typeof dado}`;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function () {
  console.log('Bruno Silva Duarte');
});

//Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
precisoVisitar(20);
jaVisitei(20);