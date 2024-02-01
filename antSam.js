document.addEventListener('DOMContentLoaded', function () {
    // Kolla om användaren är på en Samsung-enhet
    if (navigator.userAgent.match(/samsung/i)) {
        // Lägg till klassen på body-elementet
        document.body.classList.add('samsung-device');
    }
});