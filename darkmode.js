document.addEventListener('DOMContentLoaded', function () {
    // Kolla om mörkläggningsläget är aktivt
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Mörkt läge är aktivt, genomför ändringar på din webbplats
        document.body.classList.add('samsung-dark-mode');
    }
});