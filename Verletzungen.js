document.addEventListener("DOMContentLoaded", function() {
    // Haupt-Accordion
    const items = document.querySelectorAll(".accordion-item");
    items.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        header.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Andere schließen
            items.forEach(i => {
                i.classList.remove("active");
                i.querySelector(".accordion-content").style.maxHeight = null;
            });

            if(!isActive){
                item.classList.add("active");
                // Wir setzen die Höhe auf scrollHeight, damit die Animation funktioniert
                content.style.maxHeight = content.scrollHeight + "px";
                
                // WICHTIG: Nach der Animation auf 'initial' setzen, 
                // damit Untermenüs den Platz erweitern können
                setTimeout(() => {
                    if(item.classList.contains("active")) {
                        content.style.maxHeight = "none";
                    }
                }, 400); 
            }
        });
    });

    // Sub-Accordion (Schussverletzungsarten)
    const subItems = document.querySelectorAll(".sub-accordion-item");
    subItems.forEach(sub => {
        const subHeader = sub.querySelector(".sub-accordion-header");
        const subContent = sub.querySelector(".sub-accordion-content");

        subHeader.addEventListener("click", (e) => {
            e.stopPropagation(); 
            const isActive = sub.classList.contains("active");
            const parentContent = sub.closest(".accordion-content");

            // Andere Subs schließen
            const siblings = parentContent.querySelectorAll(".sub-accordion-item");
            siblings.forEach(s => {
                s.classList.remove("active");
                s.querySelector(".sub-accordion-content").style.maxHeight = null;
            });

            if(!isActive){
                sub.classList.add("active");
                subContent.style.maxHeight = subContent.scrollHeight + "px";
            }
        });
    });
});
