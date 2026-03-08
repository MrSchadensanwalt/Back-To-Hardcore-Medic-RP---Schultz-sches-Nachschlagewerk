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

const searchInput = document.getElementById('accordionSearch');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const headerText = item.querySelector('.accordion-header').textContent.toLowerCase();
        if(headerText.includes(query)) {
            item.style.display = ''; // anzeigen
        } else {
            item.style.display = 'none'; // ausblenden
        }
    });
});