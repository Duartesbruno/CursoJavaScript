// Retorne um número aleatório
// entre 1050 e 2000
const numAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(numAleatorio);




// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros); //os tres pontos é para passar em cada um dos argumento do array
console.log(numeroMaximo);



// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

const limparPreco = ((preco) => {
    preco = +preco.toUpperCase().replace('R$ ', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
})

let somaTotal = 0;
listaPrecos.forEach((preco) => {
    somaTotal = somaTotal + limparPreco(preco);
})

console.log(somaTotal);
//Soma total formatado para moeda Brasileira
console.log(somaTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));


/*
limparPreco(listaPrecos[1]);
usar para ir debugando a função
*/
