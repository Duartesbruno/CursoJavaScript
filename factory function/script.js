/*
Factory Function
São funções que retornam um objeto sem a necessidade
de utilizarmos a palavra chave new. Possuem basicamente
a mesma função que constructor functions / classes.
*/

function createButton(text) {
    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }
    return {
        text,
        element
    }
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');


//exemplo 2
function criarPessoa(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`;
  
    function andar() {
      return `${nomeCompleto} andou`;
    }
    function nadar() {
      return `${nomeCompleto} nadou`;
    }
    return {
      nome,
      sobrenome,
      andar,
      nadar,
    }
  }
  
  const pessoa = criarPessoa('Bruno', 'Duarte');



/* 
Ice Factory
Podemos impedir que os métodos e propriedades sejam
modificados com "Object.freeze()".
*/

function criarPessoa2(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`;
    function andar() {
      return `${nomeCompleto} andou`;
    }
    return Object.freeze({
      nome,
      sobrenome,
      andar,
    });
  }
  
  const pessoa2 = criarPessoa2('André', 'Rafael');



  //outro exemplo Constructor Function / Factory Function
  //duas formas de utilizar o construtor sem precisar colocar o "new" na frente
  function Carro(nome) {
    if(!(this instanceof Carro)) {
      return new Carro(nome); 
    }
    this.nome = nome;
  }

  Carro.prototype.andar = function() {
    return `${this.nome} andou`;
  }

  const carro = Carro('Gol');    //se nao colocar ou colocar new no Caro (New Carro), ele identifica la no if se caso nao tiver ele coloca
  console.log(carro);





  //exemplo 2 - verificar se no "new" possui "target"
  function Casa(nome) {
    if(!new.target) { 
      return new Casa(nome);
    }
    this.nome = nome;
  }

  Casa.prototype.andar = function() {
    return `${this.nome} andou`;
  }

  const casa = Casa('Casa Branca');    
  console.log(casa);