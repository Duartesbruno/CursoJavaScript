/*

Constructor Functions

- Camel case exemplo: botaoAtivo
- Pascal case exemplo: quando o nome da funcao
comeca com letra maiuscula

function Carro() {
    this.marca = 'Marca';
    this.preco = '0';
}

const honda = new Carro();   //honda seria um objeto que vem do construtor carro
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;

Mais utilizado da forma a baixo:
*/

function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 4000);


/*Lembrando o "this" ele faz refêrencia ao próprio objeto 
construído com a Constructor Function.*/

function carro2(marca, precoInicial) {
    this.taxa = 1.2;  //taxa de 20%
    const precoFinal = precoInicial * this.taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const renault = new carro2('Renault', 5000);
