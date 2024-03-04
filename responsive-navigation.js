function openNav() {
    document.querySelector(".nav__mobile").style.width = "100%";
}

function closeNav() {
    document.querySelector(".nav__mobile").style.width = "0%";
}

function toggleNav() {
    var nav = document.querySelector(".nav__mobile");
    var ham = document.querySelector('.ham');
    if (nav.style.width === "100%") {
        closeNav();
        ham.classList.remove('active');
    } else {
        openNav();
        ham.classList.add('active');
    }
}