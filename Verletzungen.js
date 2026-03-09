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


