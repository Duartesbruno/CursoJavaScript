/*
DESTRUCTURING - desestruturação

Permite a desestruturação de Arrays e Objetos.
Atribuindo suas propriedades à novas variáveis.
*/

const carro = {
    marca: 'Honda',
    ano: 2020
}

const {marca, ano} = carro;
console.log(marca, ano);


/*
DESTRUCTURING OBJECTS

A desestruturação irá facilitar a manipulação de dados.
Principalmente quando temos uma grande profundidade de objetos.
*/

const cliente = {
    nome: 'Andre',
    compras: {
      digitais: {
        livros: ['Livro 1', 'Livro 2'],
        videos: ['Video JS', 'Video HTML']
      },
      fisicas: {
        cadernos: ['Caderno 1']
      }
    }
  }
  
  //console.log(cliente.compras.digitais.livros);
  //console.log(cliente.compras.digitais.videos);
  
  /*
  //muito mais simples
  const {livros, videos} = cliente.compras.digitais;
  
  console.log(livros);
  console.log(videos);
*/


  //outro exemplo:

  const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras;
  console.log(digitais, fisicas, livros, videos);


  //Outro exemplo:
  const moto = {
    marca: 'Yamaha',
    ano: 2018
}

const {marca: marcaMoto, ano: AnoDaMoto} = moto
console.log(marcaMoto, AnoDaMoto);



//Exemplo caso nao ouvir cadastro uma propriedade
const conta = {
    agencia: 4,
    nConta: 5005
}

const {agencia, nConta, email = 'Não definido'} = conta;
console.log(agencia, nConta, email);



/*
DESTRUCTURING ARRAYS

Para desestruturar array's você deve colocar as variáveis entre [] colchetes.
*/

const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// Com destructuring
const [primeira, segunda, terceira] = frutas;
console.log(primeira, segunda, terceira);


/*
DECLARAÇÃO DE VARIÁVEIS

A desestruturação pode servir para declararmos uma sequência de variáveis.
*/
/*
const primeiro = 'Item 1';
const segundo = 'Item 2';
const terceiro = 'Item 3';
*/
// ou
const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']; 
console.log(primeiro, segundo, terceiro);



/*
ARGUMENTO DESESTRUTURADO

Se uma função espera receber como argumento um objeto,
podemos desestruturar ele no momento da declaração.
*/
/*modo tradicional
function handleKeyboard(event) {
    console.log(event.key);
  }
*/
  // Com Destructuring
  function handleKeyboard({key}) { //pode colocar mais de uma propriedade exemplo keyCode
    console.log(key);
  }
  
  document.addEventListener('keyup', handleKeyboard);
  