// JavaScript för att lägga till och ta bort "active" klassen när hamburgerknappen klickas
document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.hamburger-menu').classList.toggle('active');
  });