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

// --- Automatische Scroll- und Öffnungslogik ---
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search'); // Wir nutzen 'search' als Schlüssel

    if (searchTerm) {
        const query = decodeURIComponent(searchTerm).toLowerCase();
        const items = document.querySelectorAll('.accordion-item');

        items.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const headerText = header.textContent.toLowerCase();
            
            // Prüfen, ob der Suchbegriff im Titel vorkommt
            if (headerText.includes(query)) {
                // 1. Das Accordion als aktiv markieren
                item.classList.add('active');
                
                // 2. Den Inhalt ausfahren (wichtig für die Animation)
                const content = item.querySelector('.accordion-content');
                if (content) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    
                    // Deine Spezial-Logik für Untermenüs
                    setTimeout(() => {
                        if (item.classList.contains("active")) {
                            content.style.maxHeight = "fit-content";
                        }
                    }, 450);
                }

                // 3. Sanft dorthin scrollen (mit kurzer Verzögerung, damit das Layout bereit ist)
                setTimeout(() => {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 500);
            }
        });
    }
});
});

