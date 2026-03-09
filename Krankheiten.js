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

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');

    if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const items = document.querySelectorAll('.accordion-item');

        items.forEach(item => {
            const headerText = item.querySelector('.accordion-header').textContent.toLowerCase();
            
            if (headerText.includes(query)) {
                // 1. Dieses Accordion öffnen
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                if (content) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    // Für Verletzungen.js Kompatibilität:
                    setTimeout(() => { content.style.maxHeight = "fit-content"; }, 450);
                }

                // 2. Dorthin scrollen
                setTimeout(() => {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 500);
            }
        });
    }
});
            item.style.display = 'none'; // ausblenden
        }
    });

});
