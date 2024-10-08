export default function initFetchBitcoin() {
  async function fetchBitcoin() {
    try {
      const responseBitcoin = await fetch('https://blockchain.info/ticker');
      const bitcoinJson = await responseBitcoin.json();
      const brcPreco = document.querySelector('.btc-preco');
      brcPreco.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
    } catch(error) {
      console.log('Ocorreu o seguinte erro:', error)
    }
  }

  fetchBitcoin();
}