//Crie uma funcao que verifique corretamente o tipo de dado

const tipoDeDados = (dado) => {
  return Object.prototype.toString.call(dado);
}

console.log(tipoDeDados('Bruno')); //[object String]
console.log(tipoDeDados(['Bruno', 'Alessandra'])); //[object Array]

const geladeira = {
  Marca: 'Consul',
  Voltagem: 220
}

console.log(tipoDeDados(geladeira)); //[object Object]




//Crie um objeto quadrado com a propriedade lados e torne ela imutável
const quadrado = {}

Object.defineProperties(quadrado, {
  lados: {
    value: 4
  }
})




//Previna qualquer mudança no objeto abaixo
const configuracao = {
  width: 800,
  hieght: 600,
  background: '#333'
}

Object.freeze(configuracao);



//Liste o nome de todas as propriedades do protótipo de String e Arrray
console.log(Object.getOwnPropertyNames(String.prototype));  //getOwnPropertyNames - obter nome de propriedades próprias 
console.log(Object.getOwnPropertyNames(Array.prototype));









