function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function() {
                activeTab(index);
            });
        });
    }
}
initTabNav();


function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';  //para nao ficar repetindo a string cria uma variavel, caso no futuro precise mudar fica mais facil

    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);  //em vez de add colocar o toggle pq se nao tiver a classe ele coloca e se tiver ele remove
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();