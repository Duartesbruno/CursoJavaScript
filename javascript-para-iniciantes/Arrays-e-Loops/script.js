//Métodos e Propriedades de uma Array
var videoGames1 = ['Switch', 'PS4', 'XBOX'];

/*console.log(videoGames1.length);
console.log(videoGames1.push('3DS'));
console.log(videoGames1.pop());
console.log(videoGames1)*/

//For Loop
//contar até 10
for(var numero = 1; numero <= 10; numero++) {
    console.log(numero);
}


// While Loop
//contar até 10
var i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}


var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for(var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if(videoGames[item] === 'PS4') {
        break;
    }
}


var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva'];

frutas.forEach(function(item, index, array){
    console.log(item, index, array);
});

