// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Bruno',
  sobrenome: 'Duarte',
  idade: 26,
}
console.log(dadosPessoais);

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
}
console.log( dadosPessoais.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preta',
  idade: 10,
  laitr(pessoa) {
    if(pessoa === 'homem') {
      return 'Auau!';
    } else {
      return 'Nada!';
    }
  }
}
console.log(cachorro.laitr('homem')); //latiu
console.log(cachorro.laitr('mulher')); //não latiu

