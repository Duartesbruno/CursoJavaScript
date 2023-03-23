// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
console.log(cursos); //NodeList(3) [section.curso, section.curso, section.curso]
//transformar em array
const arrayCursos = Array.from(cursos);
console.log(arrayCursos); //[section.curso, section.curso, section.curso]

const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas
  };
});

console.log(objetosCurso);


// Retorne uma lista com os
// números maiores que 100
const numerosss = [3, 44, 333, 23, 122, 322, 33];
const numMaior100 = numerosss.filter(num => num > 100);
console.log(numMaior100);




// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const fazParte = instrumentos.some(intrumento => intrumento === 'Baixo');
console.log(fazParte);



// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulador, item) => {
  const limparPreco = +item.preco.replace('R$ ', '').replace(',', '.');   // + foi usado para transformar uma string em um nuemro!
  return acumulador + limparPreco;
}, 0);

console.log(valorTotal);

const valorTotalRS = valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
console.log(valorTotalRS);