var numero = 10;

numero += 10; //numero = numero + 10
console.log(numero); // numero = 20

//ou

var numero2 = 10;

numero /= numero2; // numero = 20 / 10
console.log(numero); // numero = 2


//Operador Ternário
var idade = 20;
var naoPossuiDiabetes = true;
var podeBeber;

//podeBeber = (idade >= 18 && naoPossuiDiabetes) ? true : false;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber!' : 'Não pode beber!';
console.log(podeBeber);