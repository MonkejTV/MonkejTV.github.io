document.addEventListener('DOMContentLoaded', function () {
    // Kolla om mörkläggningsläget är aktivt
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Mörkt läge är aktivt, genomför ändringar på din webbplats
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#F8F8FF';
    }
});
