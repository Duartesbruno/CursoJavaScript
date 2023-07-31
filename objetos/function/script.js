/* Function 
Toda função é criada com o contrutor
Function e por isso herda as suas propriedades e métodos*/

const perimetro = new Function('lado', 'return lado * 4');


/*Propriedades
Function.length - retorna o total de argumentos da função.
Function.name - retorna uma string com o nome da função.*/

function somar(n1, n2) {
    return n1 + n2;
}

console.log(somar(2,2)); //4
console.log(somar.length); //2
console.log(somar.name); //somar


/*function.call() 
function.call(this, arg1, arg2, ...) executa a função, 
sendo possível passarmos uma nova referência ao "this" da mesma*/
function darOi(nome, idade) {
    console.log('Oi para você ' + nome + ', ' + idade + ' anos')
}

darOi.call({}, 'Bruno', '27');






//melhor exemplo na pratica:
const carro = {
    marca: 'Ford',
    ano: 2018
}

function descricaoCar() {
    console.log(this.marca + ' ' + this.ano);
}

descricaoCar.call(carro);





//outro modelo mas nao muito comum
function descricaoCarro(km) {
    console.log(this.marca + ' ' + this.ano + ' ' + km);
}

descricaoCarro.call({marca: 'Honda', ano: 2015}, 15000);




/* Exemplo Real - o objeto atribuído a "lista" 
será o substituído pelo primeiro argumento de call()*/

function Dom(seletor) {
    this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
    this.element.classList.add(classe);
};

const li = {
    element: document.querySelector('li')
}


Dom.prototype.ativo.call(li, 'ativar');



const frutas = ['Uva', 'Mamão', 'Banana'];

// Array.prototype.mostrarThis = function() {
//     console.log(this);
// }

Array.prototype.pop.call(frutas); //mesma coisa que    frutas.pop();



/* Array-like 
HTMLCollection, NodeList e demais obejtos do Dom, são parecidos com uma array.
Por isso conseguimos utilizar os mesmos na substituição do this em call.
Exemplo:  */
const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    length: 3
}
/* {0: 'Item 1', 1: 'Item 2', 2: 'Item 3', length: 3}
Qualquer objeto que seja retornado desta forma tem como interagir 
comos metodos de prototipos de array */

//Exemplo:

const linhas = document.querySelectorAll('ol li');

const filtro = Array.prototype.filter.call(linhas, (item) => {
    return item.classList.contains('ativo');
});

//outra maneira:
const arrayLi = Array.from(li);
const filtro2 = arrayLi.filter((item) => {
    return item.classList.contains('ativo');
});

console.log(filtro);
console.log(linhas);


/*function.apply() 
O apply(this, [arg1, arg2, ...]) funciona como o call, a única 
diferença é que os argumentos da função são passados através de uma array.*/

const numeros = [10, 5, 55, 999, 2, 85, 101];
const nMaisAlto = Math.max.apply(null, numeros);
//Podemos passar null para o valor de this, caso a função não utilize o objeto principal para funcionar
console.log(nMaisAlto);



/* Apply vc Call
A única diferença é a array como segundo argumento
*/

const LI = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
    return item.classList.contains('ativo');
}

const filtro01 = Array.prototype.filter.call(LI, itemPossuiAtivo);
const filtro02 = Array.prototype.filter.apply(LI, [itemPossuiAtivo]);

console.log(filtro01);
console.log(filtro02);



/*bind() */
const car = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}

const honda = {
    marca: 'Honda'
}

// const acelerarHonda = car.acelerar.bind(honda);         //outra forma
// console.log(acelerarHonda(60, 7));

const acelerarHonda = car.acelerar.bind(honda, 60, 7);
console.log(acelerarHonda());




/*Argumentos Comuns - com bind() */
function imc(altura, peso) {
    const resultado = peso / (altura * altura);
    return +resultado.toFixed(2);
}

const imc180 = imc.bind(null, 1.80);
console.log(imc180(70));