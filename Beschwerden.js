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

/**
 * GLOBALER AUTO-SCROLL & OPEN FÜR SCHULTZ'SCHES NACHSCHLAGEWERK
 */
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');

    if (searchTerm) {
        const query = decodeURIComponent(searchTerm).toLowerCase();
        // Wir suchen in Hauptüberschriften UND Unterüberschriften
        const headers = document.querySelectorAll('.accordion-header, .sub-accordion-header');

        for (let header of headers) {
            if (header.textContent.toLowerCase().includes(query)) {
                // Falls es ein Sub-Accordion ist, erst den Haupt-Vater öffnen
                const parentItem = header.closest('.accordion-item');
                if (parentItem) {
                    parentItem.classList.add('active');
                    const pContent = parentItem.querySelector('.accordion-content');
                    if (pContent) {
                        pContent.style.maxHeight = "fit-content"; // Sofort auf für Sub-Suche
                    }
                }

                // Das eigentliche Element öffnen
                const item = header.parentElement;
                item.classList.add('active');
                const content = item.querySelector('.accordion-content, .sub-accordion-content');
                if (content) {
                    content.style.maxHeight = content.scrollHeight + "px";
                }

                // Sanft dorthin scrollen
                setTimeout(() => {
                    header.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 600);
                
                break; // Suche beenden wenn gefunden
            }
        }
    }
});
