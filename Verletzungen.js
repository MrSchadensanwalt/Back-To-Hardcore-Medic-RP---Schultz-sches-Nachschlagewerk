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
                content.style.maxHeight = content.scrollHeight + "px";
                
                // WICHTIG FÜR HANDY: Nach der Animation Höhe freigeben
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

            if(!isActive){
                sub.classList.add("active");
                subContent.style.maxHeight = subContent.scrollHeight + "px";
                // Parent Container Platz geben
                if(parentContent.style.maxHeight !== "none") {
                    parentContent.style.maxHeight = (parentContent.scrollHeight + subContent.scrollHeight) + "px";
                }
            } else {
                sub.classList.remove("active");
                subContent.style.maxHeight = null;
            }
        });
    });
});
