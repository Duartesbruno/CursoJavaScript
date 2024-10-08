/*
function Button(text, background) {
    this.text = text;
    this.background = background;
    this.render(); //Chama automaticamente o método render ao criar uma instância
}

Button.prototype.render = function() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;

    const div = document.createElement('div');
    div.appendChild(buttonElement); //appendChild adiconar o botao ao elemento div
    document.body.appendChild(div);
}

const redButton = new Button('Comprar', 'red');
*/


/*
//Class

class Button {
    constructor(text, background) {
        this.text = text;
        this.background = background;
    }

    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        return buttonElement;
    }
}

const blueButton = new Button('Vender', 'blue');
*/

/*
//exemplo para executar na tela

class Button {
    constructor(text, background, color) {
        this.text = text;
        this.background = background;
        this.color = color;
    }

    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;
        return buttonElement;
    }

    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
}

const blueButton = new Button('Vender', 'blue', 'white');
blueButton.appendTo('body');
*/

//usando um objeto de opcoes [junto exemplo static]
class Button {
    constructor(options) {
        this.options = options
    }

    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.options.text;
        buttonElement.style.background = this.options.background;
        buttonElement.style.color = this.options.color;
        return buttonElement;
    }

    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }

    static orangeButton(text) {
        const options = {
            text: text,
            background: 'orange',
            color: 'white'
        };
        
        return new Button(options);
    }
}

const blueOptions = {
    text: 'vender',
    background: 'blue',
    color: 'white'
}

const blueButton = new Button(blueOptions);
blueButton.appendTo('body');

const botaoAzul = Button.orangeButton('Lazer');
botaoAzul.appendTo('body');



/*
// e pode usar o render()
class Button {
    constructor(text, background) {
        this.text = text;
        this.background = background;
        this.render();
    }

    render() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        document.body.appendChild(buttonElement);
    }
}

const greenButton = new Button('Anunciar', 'green');

console.log(greenButton);
*/


/*
//Static
//Ele nao é um objeto do tipo button

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const elementButton = document.createElement('button');
    elementButton.innerText = this.text;
    elementButton.style.background = this.background;
    return elementButton
  }
  static createBlue(text) {
    return new Button(text, 'blue');
  }
}

const blueButton = Button.createBlue('Comprar');
*/