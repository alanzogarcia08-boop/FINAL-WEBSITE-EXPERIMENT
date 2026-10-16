/*
Full Name: Alonzo Miguel R. Garcia
Block: WD - 202
Business: NiCeity Realty
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Practical Search Bar Filter Logic (for pages with search inputs)
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const propertyCards = document.querySelectorAll('.property-card');

    function filterProperties() {
        if (!searchInput) return;
        const query = searchInput.value.toLowerCase().trim();

        propertyCards.forEach(card => {
            const title = card.getAttribute('data-title') || '';
            const location = card.getAttribute('data-location') || '';

            if (title.includes(query) || location.includes(query) || query === '') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', filterProperties);
        searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                filterProperties();
            }
        });
    }
});