document.addEventListener('DOMContentLoaded', function () {
    // Lägg till klickhändelse för "home" länken i logon
    var logoLink = document.getElementById('logo-link');
    logoLink.addEventListener('click', function (event) {
        event.preventDefault(); // Förhindra standardbeteendet för länken

        // Uppdatera URL utan att ladda om sidan
        history.pushState({}, document.title, window.location.origin);

        // Nu kan du göra de andra ändringarna som du vill göra när du går till framsidan
    });

    // Lägg till klickhändelse för "home" länken i navigationsmenyn
    var navHomeLink = document.getElementById('nav-home-link');
    navHomeLink.addEventListener('click', function (event) {
        event.preventDefault(); // Förhindra standardbeteendet för länken

        // Uppdatera URL utan att ladda om sidan
        history.pushState({}, document.title, window.location.origin);

        // Nu kan du göra de andra ändringarna som du vill göra när du går till framsidan
    });
});