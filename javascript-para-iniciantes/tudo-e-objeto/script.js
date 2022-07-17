var nome = 'André';
var nomeMinusculo = nome.toLowerCase();

nome.length; //5 (letras)
nome.charAt(1); // 'n' (letra na posicao 1)
nome.replace('ré', 'rei'); //'Andrei'
nome; //'André (os metodos nao modificam a variavel em si, até posso usar esses metdos mas colcoar o resultado deles em outra variavel)


//Números
ra = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'


var btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    console.log('clicou');
})