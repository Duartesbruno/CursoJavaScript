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
    init(marca) {
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


