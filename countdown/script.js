import Countdown from "./countdown.js";

const contagem = document.querySelector('.contagem');
const tempoParaONatal = new Countdown('24 December 2024 23:59:59 GMT-0300');

setInterval(() => {
    contagem.textContent = `Dias: ${tempoParaONatal.total.days} - Horas: ${tempoParaONatal.total.hours}:${tempoParaONatal.total.minutes}:${tempoParaONatal.total.seconds}`;
}, 1000)