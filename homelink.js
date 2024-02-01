document.addEventListener('DOMContentLoaded', function () {
    // Lägg till klickhändelse för "home" länken
    var homeLink = document.getElementById('home-link');
    homeLink.addEventListener('click', function (event) {
        event.preventDefault(); // Förhindra standardbeteendet för länken

        // Uppdatera URL utan att ladda om sidan
        history.pushState({}, document.title, window.location.origin);

        // Nu kan du göra de andra ändringarna som du vill göra när du går till framsidan
    });
});