// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoas('Bruno', 'Duarte', 26);









// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

/*
 Para listar é só colcoar no console exemplo: NodeList.prototype  (vai aparecer a lista dos métodos)
ou posso passar: Object.getOwnPropertyNames(NodeList.prototype)
*/

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

//Document com letra maiúscula é a função que construi o objeto document
//document com letra minuscula é um objeto








// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// .constructor.name

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //boolean
li.offsetLeft; //Number
li.click(); //Undefined  -não possui construtor de undefined, ela é uma funcao que vai executar codigo dentro dela.







// Qual o construtor do dado abaixo:
li.hidden.constructor.name;  

/*retorna um tipo de dato string. 
Sempre quando tiver "name" retorna nome do construtor em forma de string
 (retorna nome "boolean") Exemplo abaixo: */

 const teste = li.hidden.constructor.name; // 'Boolean'    [string escrito boolean]
 teste.constructor.name; // String


 //Exemplo de retornar o valor boolean "li.hidden" retorna false ou true.  
