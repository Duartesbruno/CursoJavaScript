const agora = new Date();
console.log(agora);

console.log(agora.getDate());

console.log(agora.getMonth());

const futuro = new Date('Dec 24 2024 23:59');
console.log(futuro);



//Dias para o Natal
function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);  //se quiser em horas '60 * 60 * 1000'  assim sucessivamente
}

const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());
const faltam = diasFuturo - diasAgora;
console.log(Math.floor(faltam));