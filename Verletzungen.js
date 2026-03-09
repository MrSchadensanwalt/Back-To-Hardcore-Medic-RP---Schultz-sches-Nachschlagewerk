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
        });
    });
});

