document.addEventListener("DOMContentLoaded", function() {
    
    // Haupt-Accordion Funktion
    const items = document.querySelectorAll(".accordion-item");
    items.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        header.addEventListener("click", function(e) {
            // Verhindert Doppelklicks auf Handys
            e.preventDefault();
            
            const isActive = item.classList.contains("active");

            // Alle anderen schließen
            items.forEach(i => {
                i.classList.remove("active");
                i.querySelector(".accordion-content").style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add("active");
                // Erst die genaue Pixelhöhe für die Animation
                content.style.maxHeight = content.scrollHeight + "px";
                
                // Nach der Animation (400ms) auf 'fit-content' setzen, 
                // damit Untermenüs und Handy-Scroll funktionieren
                setTimeout(() => {
                    if (item.classList.contains("active")) {
                        content.style.maxHeight = "fit-content";
                    }
                }, 450);
            }
        });
    });

    // Sub-Accordion (z.B. Schussverletzungen)
    const subItems = document.querySelectorAll(".sub-accordion-item");
    subItems.forEach(sub => {
        const subHeader = sub.querySelector(".sub-accordion-header");
        const subContent = sub.querySelector(".sub-accordion-content");

        subHeader.addEventListener("click", function(e) {
            e.stopPropagation(); // WICHTIG: Hauptmenü bleibt offen
            
            const isActive = sub.classList.contains("active");
            const parentContent = sub.closest(".accordion-content");

            if (!isActive) {
                sub.classList.add("active");
                subContent.style.maxHeight = subContent.scrollHeight + "px";
                
                // Dem Hauptcontainer erlauben mitzuwachsen
                if (parentContent) {
                    parentContent.style.maxHeight = "fit-content";
                }
            } else {
                sub.classList.remove("active");
                subContent.style.maxHeight = null;
            }

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
