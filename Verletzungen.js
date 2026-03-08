document.addEventListener("DOMContentLoaded", function() {
    // Haupt-Accordion
    const items = document.querySelectorAll(".accordion-item");
    items.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        header.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            items.forEach(i => {
                i.classList.remove("active");
                i.querySelector(".accordion-content").style.maxHeight = null;
            });

            if(!isActive){
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Sub-Accordion
    const subItems = document.querySelectorAll(".sub-accordion-item");
    subItems.forEach(sub => {
        const subHeader = sub.querySelector(".sub-accordion-header");
        const subContent = sub.querySelector(".sub-accordion-content");

        subHeader.addEventListener("click", (e) => {
            e.stopPropagation(); // verhindert, dass Haupt-Accordion geschlossen wird
            const isActive = sub.classList.contains("active");

            // Schließe andere Sub-Accordions im selben Haupt-Accordion
            const parentContent = sub.closest(".accordion-content");
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
