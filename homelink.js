document.addEventListener('DOMContentLoaded', function () {
    // Hämta alla länkar med id "clean_url"
    var cleanUrlLinks = document.querySelectorAll('#clean_url');

    // Lägg till klickhändelser för alla länkar
    cleanUrlLinks.forEach(function(cleanUrlLink) {
        cleanUrlLink.addEventListener('click', function (event) {
            event.preventDefault(); // Förhindra standardbeteendet för länken

            // Hämta målprefix för URL (utan filnamn)
            var urlPrefix = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');

            // Uppdatera URL utan att ladda om sidan
            history.pushState({}, document.title, urlPrefix);

            // Nu kan du göra andra ändringar beroende på vilken länk som klickades på
        });
    });
});
