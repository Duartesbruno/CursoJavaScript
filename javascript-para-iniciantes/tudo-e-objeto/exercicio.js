// nomeie 3 propriedades ou métodos de strings
var nome = 'Bruno';
nome.length;
nome.charAt(0);
nome.toUpperCase;

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
btn.addEventListener
btn.appendChild
btn.innerHTML
btn.id
btn.outerHTML
console.log(btn);

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


function minhaFuncao() {
    /* Obter o campo de texto */
    var copiarTexto = document.getElementById("meuInput");
  
    /* Selecione o campo de texto */
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); /* Para dispositivos móveis */
  
     /* Copie o texto dentro do campo de texto */
    navigator.clipboard.writeText(copiarTexto.value);
  
    /* Alertar o texto copiado */
    alert("Copiado o texto: " + copiarTexto.value);
  }