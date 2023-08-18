function ativandoAccordion(){
    const listaAccordion = document.querySelectorAll('.js-accordion dt'); //Seleciona os elementos da lista em que deseja aplicar o Accordion.
    listaAccordion[0].classList.add('ativa-accordion');
    listaAccordion[0].nextElementSibling.classList.add('ativa-accordion');
    
    function adicionaAccordion(){
        this.classList.toggle('ativa-accordion'); //Adiciona/remove a classe do elemento. O THIS representa o elemento em si.
        this.nextElementSibling.classList.toggle('ativa-accordion'); //Adiciona/remove a classe no proximo elemento que esteja no mesmo nivel do THIS.
    }

    listaAccordion.forEach(item => {
        item.addEventListener('click', adicionaAccordion);
    });
}
ativandoAccordion();

function ativandoScrollSuavizado(){
    const linksInternos = document.querySelectorAll('nav a[href^="#"]');
    function rolandoSuave(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    linksInternos.forEach(item => {
        item.addEventListener('click', rolandoSuave);
    });
}
ativandoScrollSuavizado();

function modificandoHeader() {
    // Selecionar o elemento do cabeçalho
    const header = document.querySelector('header');
    const foto = document.querySelector('header img');

    // Definir a posição de rolagem a partir da qual o estilo deve ser modificado
    const scrollThreshold = 100; // por exemplo, 100 pixels

    // Adicionar um ouvinte para o evento de rolagem da página
    window.addEventListener('scroll', () => {
        // Verificar a posição de rolagem atual
        const scrollPosition = window.scrollY;

        // Verificar se a posição de rolagem é maior do que o limiar
        if (scrollPosition > scrollThreshold) {
            // Adicionar uma classe ao cabeçalho para modificar o estilo
            header.classList.add('scrolled');
            foto.style.display = "none";
        } else {
            // Remover a classe se a posição de rolagem for menor que o limiar
            header.classList.remove('scrolled');
            foto.style.display = "block"
        }
    });
}
modificandoHeader();
