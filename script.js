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
