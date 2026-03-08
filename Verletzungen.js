document.addEventListener("DOMContentLoaded", function() {
    // Haupt-Themen
    const items = document.querySelectorAll(".accordion-item");
    items.forEach(item => {
        const header = item.querySelector(".accordion-header");
        header.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            
            // Alle anderen schließen
            items.forEach(i => i.classList.remove("active"));
            
            // Das gewählte öffnen
            if(!isActive) {
                item.classList.add("active");
            }
        });
    });

    // Unter-Themen (Schussverletzungen)
    const subItems = document.querySelectorAll(".sub-accordion-item");
    subItems.forEach(sub => {
        const subHeader = sub.querySelector(".sub-accordion-header");
        subHeader.addEventListener("click", (e) => {
            e.stopPropagation(); // Wichtig: Damit das Hauptmenü nicht zuklappt
            sub.classList.toggle("active");
        });
    });
});
