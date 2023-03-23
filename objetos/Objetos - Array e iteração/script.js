
/*
[].forEach()

[].forEach(callback(itemAtual, index, array)) a função de callback
é executada para cada item da array. Ela possui três argumentos,
itemAtual(valor do item da array), index (index do valor na array) e array(array original).

exemplo a baixo:
*/

const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {

    console.log(item, index, array);
})

console.log(carros);



/* Arrow Function */
const li = document.querySelectorAll('li');

li.forEach(item => item.classList.add('ativa'));
//ou
li.forEach((item, index) => {item.classList.add('ativa' + index)});   //se passar mais de um argumento




/*
[].map()

[].map(callback(itemAtual, indexm array)) funciona da mesma forma que o forEach(), 
porém ao invés de retornar undefined, retorna uma nova array com valores atualizados
de acordo com o return de cada iteração. 
*/

const cars = ['BMW', 'Renault', 'VW'];
const newCars = carros.map((item) => {
    return 'Carro ' + item;
});
console.log(newCars);


const frutas = ['Banana', 'Melancia', 'Laranja'];
const newFrutas = frutas.map((item, index) => {
    return index + ' ' + item;
});
console.log(newFrutas);

const numeros = [2, 3, 4, 5, 10];
const numeroX2 = numeros.map(n => n * 2);
console.log(numeroX2);



const aulas = [
    {
        nome: 'HMTL 1',
        min: 15      
    },
    {
        nome: 'HTML2',
        min: 10
    },
    {
        nome: 'CSS1',
        min: 20
    },
    {
        nome: 'JS1',
        min: 25    
    },
]

const tempoAula = aulas.map(aula => aula.min);
console.log(tempoAula);


/*
[].reduce()

[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
executa a função de callback para cada item da Array. um valor especial existe
nessa função de callback, ele é chamado de "acumulador",
mas é na verade apenas o retorno da iteração anterior.
*/

const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
    console.log(acumulador, item.min, index);
    return acumulador + item.min; 
}, 0)

console.log(reduceAulas);




const numbers = [10, 25, 60, 5, 35, 10]

const valorMaior = numbers.reduce((anterior, atual) => {
    console.log(anterior, atual);
    return anterior < atual ? atual : anterior;
});

console.log(valorMaior);





const listaAulas = aulas.reduce((acumulador, item, index) => {
    console.log(item.nome)
    acumulador[index] = item.nome;
    console.log(acumulador)
    return acumulador;
}, {})



/*
[].reduceRight()

Existe também o métodoo [].reduceRight() , a diferença é que este começa
a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para direitra
*/

const fruits = ['Banana', 'Pêra', 'Uva'];

const fruitsRight = fruits.reduceRight((acc, fruit) => acc + ' ' + fruit);
console.log(fruitsRight);

const fruitsLeft = fruits.reduce((acc, fruit) => acc + ' ' + fruit);
console.log(fruitsLeft);



/*
[].some()

[].some(), se pelo menos um return da iteração for truthy, ele retorna true.
*/

const temUva = fruits.some((item) => {
    return item == 'Uva';
});

console.log(temUva); //true




function maiorQue100(numero) {
    return numero > 100;
};

const n = [0, 43, 50, 80, 99, 101, 2]
const temMaior = n.some(maiorQue100);

console.log(temMaior); //true




/*
[].every()

[].every(), se todos os returns das iterações forem truthy,
o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.
*/

const instruments = ['violão', 'teclado', 'cavaquinho', ''];
//está vazio '', o que é um valor falsy
const arrayCheias = instruments.every((item) => {
    return item;
});

console.log(arrayCheias); //false


const n1 = [6, 43, 22, 48, 101];

const maiorQue3 = n1.every(item => item >= 3);

console.log(maiorQue3);




/*
[].find() e [].findindex()

[].find(), retorna  o valor atual da primeira iteração que 
retorna um valor truthy. Já o [].findindex() , aoo invés de
retorna o valor, retorna o index deste valor na array.*/

const jobs = ['pintor', 'professor', 'cantor'];
const buscaProfessor = jobs.findIndex((item) => {
    return item == 'professor';
});
console.log(buscaProfessor); //1

const numb = [6, 5, 100, 25, 200];
const buscaMaior6 = numb.find(x => x > 6);
console.log(buscaMaior6); //100




/*
[].filter()

[].filter() , retorna uma array com a lista de valores que durante a sua
iteração retornaram um valor truthy.
*/

const times = ['internacional', undefined, null, '', 'gremio', 0, 'são josé']
const arrayLimpa = times.filter((item) => {
    return item;
});

console.log(arrayLimpa); // ['internacional', 'gremio', 'são josé']

const numeross = [6, 43, 22, 88, 101, 29];
const buscaMAior45 = numeross.filter(x => x > 45);
console.log(buscaMAior45); //[88, 101]




const equipes = [
    {
        nome: 'azul',
        vitorias: 15      
    },
    {
        nome: 'verde',
        vitorias: 10
    },
    {
        nome: 'amarela',
        vitorias: 20
    },
    {
        nome: 'vermelha',
        vitorias: 25    
    },
]

const maior15 = equipes.filter(equipe => equipe.vitorias > 15);
//ou
/* const maior15 = equipes.filter((equipe) => {
    return equipe.vitoria > 15;
});
*/
console.log(maior15);