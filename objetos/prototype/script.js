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
