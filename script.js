fetch('data.json')
.then(res => res.json())
.then(data => {
    const container = document.getElementById('symptome-list');

    data.forEach(k => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${k.name}</h2>
            <img src="${k.bild}" alt="${k.name}" class="krankheit-bild">
            <p>Symptome: ${k.symptome.join(', ')}</p>
            <button onclick="showBehandlung(${k.id})">Behandlung anzeigen</button>
        `;
        container.appendChild(card);
    });

    window.showBehandlung = function(id) {
        const krankheit = data.find(k => k.id === id);
        const output = document.getElementById('diagnose-output');
        output.innerHTML = `<h2>${krankheit.name} Behandlung</h2>
                            <ul>${krankheit.behandlung.map(b => `<li>${b}</li>`).join('')}</ul>`;
    }

});

function performGlobalSearch() {
    const query = document.getElementById('globalSearch').value.toLowerCase().trim();
    if (!query) return;

    // Zuordnung: Suchbegriff -> Zielseite
    const mapping = {
        // Krankheiten
        "pest": "Krankheiten.html", "cholera": "Krankheiten.html", "pocken": "Krankheiten.html",
        "tuberkulose": "Krankheiten.html", "tbc": "Krankheiten.html", "harnwegsinfekt": "Krankheiten.html",
        "syphilis": "Krankheiten.html", "tollwut": "Krankheiten.html",
        // Medikamente
        "aspirin": "Medikamente.html", "morphium": "Medikamente.html", "alkohol": "Medikamente.html",
        "laudanum": "Medikamente.html", "bromid": "Medikamente.html", "menthol": "Medikamente.html",
        // Ausrüstung
        "skalpell": "ausruestung.html", "amputationsmesser": "ausruestung.html", "lanzette": "ausruestung.html",
        "knochensäge": "ausruestung.html", "lupe": "ausruestung.html",
        // Verletzungen
        "schusswunde": "Verletzungen.html", "messerwunde": "Verletzungen.html", "verbrennung": "Verletzungen.html",
        "bisswunde": "Verletzungen.html", "knochenbruch": "Verletzungen.html",
        // Beschwerden
        "kopfschmerz": "Beschwerden.html", "schock": "Beschwerden.html", "bewusstlosigkeit": "Beschwerden.html"
    };

    let targetPage = "";
    // Prüfe, ob der Begriff direkt im Mapping ist oder darin enthalten ist
    for (let key in mapping) {
        if (key.includes(query) || query.includes(key)) {
            targetPage = mapping[key];
            break;
        }
    }

    if (targetPage) {
        // Wir leiten weiter und hängen den Suchbegriff als Parameter an
        window.location.href = targetPage + "?search=" + encodeURIComponent(query);
    } else {
        alert("Begriff nicht gefunden. Bitte versuchen Sie es mit einem anderen Schlagwort.");
    }
}

// Suche auch bei Enter-Taste auslösen
document.getElementById('globalSearch')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') performGlobalSearch();
});
