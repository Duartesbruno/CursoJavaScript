/* Object 
(Construtor de objeto)

Todo objeto é criado com o contrutor Object e por isso herda 
as propriedades e métodos do seu prototype.
*/

const car = {
    marca: 'Ford',
    ano: 2018,
}

console.log(car);

const pessoa = new Object({
    nome: 'Bruno',
    idade: 28,
});

console.log(pessoa);


/* Métodos de Object
Object.create(obj, defineProperties) retorna um novo objeto
que terá como protótipo o objeto do primeiro argumento. */

const carro = {
    rodas: 4,
    init(marca) {                       //init é só um nome qualquer que foi atribuido para este metodo que vai sempre atualizar a marca 
        this.marca = marca;
        return this;
    },

    acelerar() {
        return `${this.marca} acelerou as ${this.rodas} rodas`;
    },

    buzinar() {
        return this.marca + ' buzinou';
    }
}

const carro1 = Object.create(carro).init('Renault');
carro1;  //{marca: 'Renault'}
carro1.acelerar();  //'Renault acelerou as 4 rodas'



const carro2 = Object.create(carro).init('Ferrari');
carro1;  //{marca: 'Ferrari'}
carro2.acelerar(); //'Ferrari acelerou as 4 rodas'



/* Object.assign()
Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades 
e métodos enumeráveis dos demais objetos. O assign irá modificar
o objeto alvo. */

const funcaoAutomovel = {
    acelerar() {
        return `${this.automovel} acelerou`;
    },
    buzinar(){
        return `${this.automovel} buzinou`;
    },
}

const moto = {
    automovel: 'moto',
    rodas: 2,
    capacete: true
}

Object.assign(moto, funcaoAutomovel);
console.log(moto);



const onibus = {
    automovel: 'onibus',
    rodas: 7,
    capacete: false
}

Object.assign(onibus, funcaoAutomovel);
console.log(onibus);



/* 
Object.defineProperties()
Object.defineProperties(alvo, propriedade) adiciona ao alvo novas propriedades.
A diferença aqui é a possibilidade de serem definidas as caracteristicas dessas propriedades.
*/

const microOnibus = {}

Object.defineProperties(microOnibus, {
    rodas: {
        value: 6,
        configurable: true,          //para não conseguir deletar a propriedade
        writable: true              //para escrita da propriedade ser editavel  (o default é false)   
    }
})

// delete microOnibus.rodas;
// microOnibus.rodas = 10;
console.log(microOnibus);




const bicicleta = {}

Object.defineProperties(bicicleta, {
    rodas: {
        enumerable: true,
        get() {
            return this. _rodas;
        },

        set(valor) {
            this._rodas = valor;
        }
    }
})

console.log(bicicleta);
bicicleta.rodas = 2;
console.log(bicicleta);



/*
Object.getOwnPropertyDescriptors(obj)
Lista todos os métodos e propriedades de um objeto, 
com as suas devidas configurações.
*/

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptors(window, 'innerHeight');
// Puxa de uma única propriedade


Object.getOwnPropertyDescriptors(microOnibus);
// pega todas propriedades e seu descritor

/*
Object.keys(obj) //retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto.
Object.values(obj) //retorna uma array com os valores do objeto.
Object.entries(obj) //retorna uma array com array's contendo a chave e o valor.
*/



/*
Object.getOwnPropertyNames(obj)
Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).
*/

Object.getOwnPropertyNames(moto); //esse puxa os não enumeravel tambem
// ['automovel', 'rodas', 'capacete', 'acelerar', 'buzinar']





/* Object.getPrototypeOf() e Object.is()
Object.getPrototypeOf() , retorna o protótipo do objeto. 
Objct.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.
*/

 const frutas = ['Banana', 'Pêra'];
 Object.getPrototypeOf(frutas); //aparece o contructor de objetos


 const frutas1 = ['Banana', 'Pêra'];
 const frutas2 = ['Banana', 'Pêra'];

 Object.is(frutas1, frutas2); //false  (pois sao objetos diferentes)

 //ja fosse:

 const novaFruta = frutas1;

 Object.is(frutas1, novaFruta); //true (são iguai, pois nova fruta é uma atribuição direta de frutas1)




 /*
 Object.freeza(), Object.seal(), Object.preventExtensions()

 Object.freeze() impede qualuqer mudança nas propriedades.
 Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas.
Object.preventExtensions() previne a adição de novas propriedades.
 */

const marcas = {
    nome: 'Adidas',
    ano: 1949
}

// Object.freeze(marcas);

// Object.seal(marcas);
// delete marcas.nome

// Object.preventExtensions(marcas)
// marcas.idade = 5;

// marcas.nome = 'Nike'
console.log(marcas);





/*
{}.hasOwnProperty('prop')  e {}.propertyIsEnumerable('prop')
Verifica se possui a propriedade e retorna true. A propriedade deve ser deireta do protótipo.
O {}.propertyIsEnumeravle() verifica se a propriedade é enumerável
*/

const fruteira = ['Banana', 'Uva'];

fruteira.hasOwnProperty('map'); //false     verifica se tem a propriedade 'map' em frutas
Array.prototype.hasOwnProperty('map'); //true       possui a propriedade 'map' em Array
Array.hasOwnProperty('map'); //false 
Object.getOwnPropertyNames(fruteira); // ['0', '1', 'length']

Array.prototype.propertyIsEnumerable('map'); //false
window.propertyIsEnumerable('innerHeight'); //true

Array.prototype.isPrototypeOf(fruteira); //true  *Array.prototype é prototipo de fruteira - verdadeiro

fruteira.toString(); // 'Banana,Uva'

//Para vericar o tipo do objeto:
Object.prototype.toString.call(fruteira); // '[object Array]'    (Objeto do tipo Array)
