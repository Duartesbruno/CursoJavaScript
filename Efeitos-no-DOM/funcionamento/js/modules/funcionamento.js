export default function initFuncinamento() {
  const funcionameto = document.querySelector('[data-semana]');
  const diasSemana = funcionameto.dataset.semana.split(',').map(Number);  //para transfomar uma string em uma array e usar o .map para tranformar em nuemro
  const horarioSemana = funcionameto.dataset.horario.split(',').map(Number);  //para transfomar uma string em uma array e usar o .map para tranformar em nuemro
  const dataAgora =new Date();
  const diaDaSemanaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaDaSemanaAgora) !== -1; //vai procurar no array os dias da semana se for diferente de -1 ele vai dar true (os valores que ele nao acha ele retorna -1)

  const horarioAberto = ((horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]));

  if(semanaAberto && horarioAberto) {
    funcionameto.classList.add('aberto');
  }
}