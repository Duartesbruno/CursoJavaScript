function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);

    function hide() {
        elements.forEach(element => {
            element.style.display = 'none';
        });
        return this; //mesmo que depois ele esconda os item continue retornando os elementos
    }

    function show() {
        elements.forEach(element => {
            element.style.display = 'initial';
        });
        return this;
    }

    function on(onEvent, callback) {
        elements.forEach(element => {
            element.addEventListener(onEvent, callback);
        });
        return this;
    }

    function addClass(className) {
        elements.forEach(element => {
            element.classList.add(className);
        });
        return this;
    }

    function removeClass(className) {
        elements.forEach(element => {
            element.classList.remove(className);
        });
        return this;
    }

    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass,
    }
}



const btns = $$('button');

console.log(btns.elements);
// console.log(btns.hide());  //some todos os elementos



function handleClick(event) {
    console.log(event.target);
    btns.addClass('active');
}

btns.on('click', handleClick);


// btns.removeClass('active');