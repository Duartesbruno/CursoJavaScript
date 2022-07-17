// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
      console.log(this.nome + ' andou!');
    }
  }

  const alessandra = new Pessoa('Alessandra', 21);
  console.log(alessandra.nome);
  console.log(alessandra.idade);
  console.log(alessandra.andar());


  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  
  const joao = new Pessoa('João', 20);
  const maria = new Pessoa('Maria', 25);
  const bruno = new Pessoa('Bruno', 15);






  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
  
  function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);  //buscar a lista
    this.elements = elementList;  //larga a lista dentro da variavel elements
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.add(classe)
        });
    }
    this.removeClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe);
        });
    }
  }

  const listaLi = new Dom('li');
  const listaUl = new Dom('ul');

  listaLi.addClass('ativar');
  listaUl.addClass('ativar-ul');

  listaUl.removeClass('ativar-ul');