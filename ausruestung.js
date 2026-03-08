const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-item.active');
        if(openItem && openItem !== header.parentElement) {
            openItem.classList.remove('active');
        }
        header.parentElement.classList.toggle('active');
    });
});

const subAccordionHeaders = document.querySelectorAll('.sub-accordion-header');
subAccordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('active');
    });
});
