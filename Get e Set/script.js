const button = {
    get tamanho() {
        return this._numero || 'Numero nao definido';
    },
    set tamanho(numero) {
        this._numero = numero;
    }
}




//pode sr um valor estático - que noa consegue ser alterado
const matematica = {
    get PI() {
        return 3.14;
    }
}

console.log(matematica.PI);
matematica.PI = 20;
console.log(matematica.PI); //não alterou o valor



//lista de frutas
const frutas = {
    lista: [],
    set nova(fruta) {
        this.lista.push(fruta);
    }
}

frutas.nova = 'Banana';
frutas.nova = 'Laranja';
frutas.nova = 'Maça';

console.log(frutas);


//Assim como em um obejto, as classes podem ter métodos de get e set tembém

class Button {
    constructor(text, background) {
        this.text = text;
        this.background = background;
    }
    
    get element() {
        const type = this._elementType || 'button';
        const buttonElement = document.createElement(type);
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background
        return buttonElement
    }

    set element(type) {
        this._elementType = type;
    }
    
    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element);
        return targetElement;
    }
}

const novoButton = new Button('Comprar', 'green');
novoButton.element = 'span';
novoButton.appendTo('body');



//extends
class Veiculo {
    constructor(rodas, combustivel) {
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
    acelerar() {
        console.log('Acelerou!');
    }
}

class Moto extends Veiculo {
    constructor(rodas,combustivel, capacete) {
        super(rodas, combustivel);
        this.capacete = capacete;
    }
    empinar() {
        console.log(`Moto Empinou com as ${this.rodas} rodas!`)
    }
    acelerar() {
        super.acelerar();
        console.log('Acelerou Muito!');
    }
}

const fan =  new Moto(2, 'Gasolina', true);
console.log(fan);