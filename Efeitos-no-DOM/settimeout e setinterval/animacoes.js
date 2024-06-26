function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });

            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add('ativo', direcao);
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
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
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


function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault()
        const href = this.getAttribute('href');
        const section = document.querySelector(href);
        //const topo = section.offsetTop;
    
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

    /*forma alternativa

        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    */
    }


    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();


function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;  //foi usado para calcular 60% da tela do usuario

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;

                if(isSectionVisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            })
        }
        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll();