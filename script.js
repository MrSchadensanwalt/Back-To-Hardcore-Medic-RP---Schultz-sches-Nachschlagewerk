function getLevenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('globalSearch');
    const suggestionBox = document.getElementById('search-suggestions');
    const searchForm = document.getElementById('search-form');

    function performSearch(item) {
        if (item) {
            window.location.href = `${item.page}?search=${item.id}`;
        }
    }

    function showSuggestions(value) {
        const query = value.toLowerCase().trim();
        suggestionBox.innerHTML = ''; 

        if (query.length < 2) { 
            suggestionBox.style.display = 'none';
            return;
        }

        const exactMatches = allSearchItems.filter(item => 
            item.name.toLowerCase().includes(query)
        );

        const fuzzyMatches = allSearchItems.filter(item => 
            !exactMatches.includes(item) && 
            getLevenshteinDistance(query, item.name.toLowerCase()) <= 2
        );

        const results = [...exactMatches, ...fuzzyMatches].slice(0, 6); 

        if (results.length > 0) {
            results.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('search-suggestion-item');
                div.textContent = item.name;
                div.addEventListener('click', function() {
                    performSearch(item);
                });
                suggestionBox.appendChild(div);
            });
            suggestionBox.style.display = 'block';
        } else {
            suggestionBox.style.display = 'none';
        }
    }

    searchInput.addEventListener('input', function() {
        showSuggestions(this.value);
    });

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const query = searchInput.value.toLowerCase().trim();
        
        const firstMatch = allSearchItems.find(item => 
            item.name.toLowerCase().includes(query) || 
            getLevenshteinDistance(query, item.name.toLowerCase()) <= 1 
        );
        
        if (firstMatch) {
            performSearch(firstMatch);
        } else {
            alert("Begriff nicht gefunden. Klicke am besten auf einen der Vorschläge unter der Suchleiste!");
        }
    });

    document.addEventListener('click', function(e) {
        if (!searchForm.contains(e.target)) {
            suggestionBox.style.display = 'none';
        }
    });
});
