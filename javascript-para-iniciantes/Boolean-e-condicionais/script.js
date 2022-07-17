//condicionais
var possuiTecnologo = false;
var possuiDoutorado = true;

if(possuiTecnologo) {
    console.log('Possui!');

} else if(possuiDoutorado) {
    console.log('Possui Doutorado!')

} else {
    console.log('Nao Possui Nenhuma Graduacao!');
}

10 == '10'; //true
10 == 10; //true
10 === '10'; //false
10 === 10 //true
10 != 15 // true
10 != '10' // false
10 !== '10' //true


true && true; //true
true && false; //false
false && true; //false
'Gato' && 'Cão'; //'Cão'
5 - 5 && (5 + 5); //0
'Gato' && false; //false
(5 >= 5) && (3 < 6); //true


true || true; //true
true || false; //true
false || true; //true
'Gato' || 'Cão'; //'Gato'
(5 - 5) || (5 + 5); //10
'Gato' || false; //Gato
(5 >= 5) || (3 < 6); //true


//condicao switch case

var corFavorita = 'vermelho';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para as flores.');
        break;
    default:
        console.log('Feche os olhos.')
}



