const cpfsList = document.querySelectorAll('.cpf li');


const elementsInnerText = ([...elements]) => {  //... desestruturar uma nodeList para virar um array
  return elements.map(element => element.innerText);  //map retorna sempre um novo array mais oq voce modificar dentro dele
}

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');  // \D tudo que nao for digito
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');  //$& - mostra todas capturas
}

const formatarCPFs = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
}




const substituirCPFs = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFs(cpfs);
  
  cpfsElements.forEach((element, index) => {
    element.innerText= cpfsFormatados[index];
  });
}

substituirCPFs(cpfsList);