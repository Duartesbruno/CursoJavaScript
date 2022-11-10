//prototype

function Pessoa(nome, idade) {    
    this.nome = nome;           //objeto
    this.idade = idade;
    this.abracar = function() {
        return 'abracou pelo objeto';
    }
   
}

Pessoa.prototype.abracar = function() {
    return this.nome + ' pessoa abracou pelo prototype';
}

Pessoa.prototype.andar = function() {
    return this.nome + ' pesssoa andou pelo prototype'
}

const andre = new Pessoa('André', 28);


/* primeiro procura dentro do objeto se não exitir, 
dai ele vai no prototype se existir ele executa. 
Caso existir no objeto ele exexuta no objeto */




const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0);  // B
cidade.charAt(0); // R



const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']; //array list
const lista = document.querySelectorAll('li'); //NodeList
//para transformar uma nodelist em array list: 
const listaArray = Array.prototype.slice.call(lista);
//hoje em dia se usa mais a forma a baixo que tbm tranforma em array mas as vezes 
//pode dar algum problema de não conseguir acesso algum objeto dai se uso o metodo a cima com slice:
const listaArray2 = Array.from(lista);



//retornar uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);


//Verifique o nome do construtor com 
//.constructor.name