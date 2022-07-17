//Os objetos servem para organizar o código em pquenas partes reutilizáveis

var pessoa = {
    nome: 'Bruno',
    idade: 26,
}

console.log(pessoa);



var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//pode ser feito assim tbm: [ES6]

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//nomenclatura
//console :é um objeto   log: seria metedo e o que esta dentro dos parentes é um parametro

Math.PI; //3.14
Math.random(); //número aleatorio

var pi = Math.PI;
console.log(pi);


var menu = {
    widht: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}
menu.color = 'blue';

//metodo hasOwnProperty() verifica se possui tal propriedade exemplo:
console.log(menu.hasOwnProperty('color'));


//metodo length conta o total de caracteres exemplo:
console.log('Bruno'.length); //5

