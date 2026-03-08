document.addEventListener("DOMContentLoaded", function() {
    // HAUPT-ACCORDION
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        header.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Andere schließen
            accordionItems.forEach(i => {
                i.classList.remove("active");
                i.querySelector(".accordion-content").style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // SUB-ACCORDION (z.B. Schussverletzungsarten)
    const subItems = document.querySelectorAll(".sub-accordion-item");

    subItems.forEach(subItem => {
        const subHeader = subItem.querySelector(".sub-accordion-header");
        const subContent = subItem.querySelector(".sub-accordion-content");

        subHeader.addEventListener("click", (e) => {
            e.stopPropagation(); // Verhindert, dass das Hauptmenü zuklappt

            const isActive = subItem.classList.contains("active");
            const parentContent = subItem.closest(".accordion-content");

            // Andere Untermenüs im gleichen Bereich schließen
            const siblingSubs = parentContent.querySelectorAll(".sub-accordion-item");
            siblingSubs.forEach(s => {
                s.classList.remove("active");
                s.querySelector(".sub-accordion-content").style.maxHeight = null;
            });

            if (!isActive) {
                subItem.classList.add("active");
                subContent.style.maxHeight = subContent.scrollHeight + "px";
                
                // WICHTIG: Dem Hauptmenü sagen, dass es jetzt GRÖSSER sein muss
                parentContent.style.maxHeight = (parentContent.scrollHeight + subContent.scrollHeight) + "px";
            } else {
                subItem.classList.remove("active");
                subContent.style.maxHeight = null;
                // Zurück zur normalen Größe
                parentContent.style.maxHeight = parentContent.scrollHeight + "px";
            }
        });
    });
});
        });
    });
});

