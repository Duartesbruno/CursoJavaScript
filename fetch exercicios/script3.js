const linkPiada = document.querySelector('.linkPiada')
const imgPiada = document.querySelector('.imgPiada')
const piada = document.querySelector('.piada')
const btnProxima = document.getElementById('btnProxima')

const buscarPiada = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => {
        return r.json(); 
    })
    .then(data => {
        console.log(data.url)
        linkPiada.href = data.url;
        imgPiada.src = data.icon_url;
        piada.innerText = data.value;
    })
}


btnProxima.addEventListener('click', buscarPiada);
buscarPiada();