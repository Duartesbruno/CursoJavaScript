let notas = [50, 45, 45, 42, 40, 30];
let notaJoao = [41];

// Adicionar a nota de João ao array de notas
notas.push(notaJoao[0]);

// Ordenar as notas em ordem decrescente
notas.sort(function(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});

// Função para agrupar os números iguais
function agruparNumerosIguais(arr) {
  const agrupado = [];
  let i = 0;

  while (i < arr.length) {
    const num = arr[i];
    const grupo = [num];

    // Verifica os números seguintes e adiciona ao grupo enquanto forem iguais
    while (i + 1 < arr.length && arr[i + 1] === num) {
      grupo.push(arr[i + 1]);
      i++;
    }

    agrupado.push(grupo);
    i++;
  }

  return agrupado;
}

let novoArray = agruparNumerosIguais(notas);

//funcao para encontrar a posicao no arrau bidimensional
function encontrarPosicaoNoArrayBidimensional(arrBidimensional, elementoProcurado) {
  for (let i = 0; i < arrBidimensional.length; i++) {
    const subarray = arrBidimensional[i];
    const indice = subarray.indexOf(elementoProcurado);

    if (indice !== -1) {
      return { linha: i, coluna: indice };
    }
  }

  return null; // Retorna null caso o elemento não seja encontrado
}

let posicaoNotaJoao = encontrarPosicaoNoArrayBidimensional(novoArray, notaJoao[0]);

console.log(`A posição da nota de João no ranking é: ${posicaoNotaJoao.linha + 1}° lugar.`);
