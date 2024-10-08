const spanBitcoin = document.getElementById('resultadoBitcoin');

const fetchBitcoin = () => {
    fetch('https://blockchain.info/ticker')
    .then(r => {
        return r.json()
    })
    .then(data => {
        console.log(data);
        spanBitcoin.innerText = (`R$ ${data.BRL.buy}`).replace('.', ',');
    });
}

// setInterval(fetchBitcoin, 1000 * 30);
fetchBitcoin();
