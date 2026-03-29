document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Klick-Funktion für die Haupt-Akkordeons
    const items = document.querySelectorAll(".accordion-item");
    items.forEach(item => {
        const header = item.querySelector(".accordion-header");
        
        header.addEventListener("click", function(e) {
            e.preventDefault();
            toggleMainAccordion(item);
        });
    });

    // 2. Klick-Funktion für die Sub-Akkordeons
    const subItems = document.querySelectorAll(".sub-accordion-item");
    subItems.forEach(sub => {
        const subHeader = sub.querySelector(".sub-accordion-header");
        
        subHeader.addEventListener("click", function(e) {
            e.stopPropagation(); 
            toggleSubAccordion(sub);
        });
    });

    // 3. Suche aus der URL verarbeiten
    applySearchQueryOnLoad();
});

// Hilfsfunktion: Haupt-Akkordeon öffnen/schließen
function toggleMainAccordion(item) {
    const isActive = item.classList.contains("active");
    const content = item.querySelector(".accordion-content");
    const allItems = document.querySelectorAll(".accordion-item");

    allItems.forEach(i => {
        i.classList.remove("active");
        const c = i.querySelector(".accordion-content");
        if(c) c.style.maxHeight = null;
    });

    if (!isActive) {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        
        setTimeout(() => {
            if (item.classList.contains("active")) {
                content.style.maxHeight = "fit-content";
            }
        }, 450);
    }
}

// Hilfsfunktion: Sub-Akkordeon öffnen/schließen
function toggleSubAccordion(sub) {
    const isActive = sub.classList.contains("active");
    const subContent = sub.querySelector(".sub-accordion-content");
    const parentContent = sub.closest(".accordion-content");

    if (!isActive) {
        sub.classList.add("active");
        subContent.style.maxHeight = subContent.scrollHeight + "px";
        if (parentContent) parentContent.style.maxHeight = "fit-content";
    } else {
        sub.classList.remove("active");
        subContent.style.maxHeight = null;
    }
}

// Such-Logik beim Seitenaufruf
function applySearchQueryOnLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');

    if (searchTerm) {
        const query = decodeURIComponent(searchTerm).toLowerCase();
        const headers = document.querySelectorAll('.accordion-header, .sub-accordion-header');

        for (let header of headers) {
            if (header.textContent.toLowerCase().includes(query) || header.parentElement.id === query) {
                
                const parentItem = header.closest('.accordion-item');
                if (parentItem && parentItem !== header.parentElement) {
                    parentItem.classList.add('active');
                    const pContent = parentItem.querySelector('.accordion-content');
                    if (pContent) pContent.style.maxHeight = "fit-content";
                }

                const item = header.parentElement;
                if (item.classList.contains('accordion-item')) {
                    toggleMainAccordion(item);
                } else if (item.classList.contains('sub-accordion-item')) {
                    toggleSubAccordion(item);
                }

                setTimeout(() => {
                    header.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 600);
                
                break;
            }
        }
    }
}
