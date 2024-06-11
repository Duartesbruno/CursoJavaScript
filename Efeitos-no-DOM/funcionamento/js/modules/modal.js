export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if(botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault(); //para nao sair da pagina
      containerModal.classList.toggle('ativo')

      // if(containerModal.classList.contains('ativo')) {
      //   document.body.style.overflow = 'hidden';
      // } else {
      //   document.body.style.overflow = '';
      // }
    }

    function cliqueForaModal(event) {
      console.log(event.target)
      if(event.target === this) {
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
