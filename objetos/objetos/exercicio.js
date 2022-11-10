// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Taxa Cliente',
      valor: 'R$ 49',
    },
  ];

  let taxaTotal = 0;
  let recebimentoTotal = 0;
  transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '');  // + na frente serve para converter uma string que é somente numero em numero & o replace substitui o primeira string setada pela segunda, nesse caso estava vazia e deletou
    if (item.descricao.slice(0, 4) == 'Taxa') {
        taxaTotal = taxaTotal + numeroLimpo;
    } else if(item.descricao.slice(0, 4) == 'Rece'){
        recebimentoTotal = recebimentoTotal + numeroLimpo;
    }
})

console.log(`Valor total taxa: ${taxaTotal}`)
console.log(`Valor total recibimento: ${recebimentoTotal}`)






  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const arrayTransportes = transportes.split(';');
  console.log(arrayTransportes);
  
  
  
  

  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

//em uma linha unica mas a variavel html tem que ser let para receber novo valor
//html = html.split('span').join('a');

                
const htmlArrayy = html.split('span');
console.log(htmlArrayy);

const newHtml = htmlArrayy.join('a');
console.log(newHtml);




  //Retorne o último caracter da frase
  const frasee = 'Melhor do ano!';
  console.log(frasee.charAt(frasee.length - 1));
  //ou
  //console.log(frasee.slice(-1));
  //ou
  //console.log(frase[frase.length - 1]);
  


 
  // Retorne o total de taxas
  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  let totalTaxa = 0
  let naoTaxa = 0
  transacoes2.forEach((item) => {
    const limpString = item.trim().toLowerCase();
    if (limpString.slice(0, 4) == 'taxa') {
        totalTaxa = totalTaxa + 1;
    } else {
        naoTaxa = naoTaxa + 1;
    }
    
  })
  console.log(`Total de taxas: ${totalTaxa}`);
  console.log(`Total dos que não são taxas: ${naoTaxa}`);
  