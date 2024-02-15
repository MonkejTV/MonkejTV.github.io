const hamburgerMenu = document.querySelector('.Hamburger-Menu');
const xWidth = `${parseFloat(getComputedStyle(hamburgerMenu).getPropertyValue('--hamburger-height')) * 1.41421356237}px`;

hamburgerMenu.style.setProperty('--x-width', xWidth);
hamburgerMenu.style.display = 'flex';
hamburgerMenu.style.flexDirection = 'column';
hamburgerMenu.style.gap = 'var(--hamburger-gap)';
hamburgerMenu.style.width = 'max-content';
hamburgerMenu.style.position = 'fixed';
hamburgerMenu.style.top = '25px';
hamburgerMenu.style.right = '60px';
hamburgerMenu.style.zIndex = '2';
hamburgerMenu.style.cursor = 'pointer';

// Här kan du placera det
// You might need to replace '--dark-color' and '--light-color' with actual color values
if (hamburgerMenu.querySelector('input:checked')) {
    hamburgerMenu.style.setProperty('--foreground', getComputedStyle(document.body).getPropertyValue('--dark-color'));
    hamburgerMenu.style.setProperty('--background', getComputedStyle(document.body).getPropertyValue('--light-color'));
}

const hamburgerMenuInput = hamburgerMenu.querySelector('input');
const hamburgerMenuBefore = document.createElement('div');
const hamburgerMenuAfter = document.createElement('div');

[...[hamburgerMenuBefore, hamburgerMenuAfter, hamburgerMenuInput]].forEach(element => {
    hamburgerMenu.appendChild(element);
    element.style.width = 'var(--bar-width)';
    element.style.height = 'var(--bar-height)';
});

const setTransition = () => {
    const animationTiming = getComputedStyle(document.body).getPropertyValue('--animation-timing');
    [hamburgerMenuBefore, hamburgerMenuAfter, hamburgerMenuInput].forEach(element => {
        element.style.transition = `opacity ${animationTiming}, width ${animationTiming}, rotate ${animationTiming}, translate ${animationTiming}, background-color ${animationTiming}`;
    });
};

setTransition();

hamburgerMenuInput.style.appearance = 'none';
hamburgerMenuInput.style.padding = '0';
hamburgerMenuInput.style.margin = '0';
hamburgerMenuInput.style.outline = 'none';
hamburgerMenuInput.style.pointerEvents = 'none';

const handleCheckboxChange = () => {
    if (hamburgerMenuInput.checked) {
        hamburgerMenuBefore.style.transform = 'rotate(45deg)';
        hamburgerMenuBefore.style.width = xWidth;
        hamburgerMenuBefore.style.transform = `0 calc(var(--bar-height) / -2)`;

        hamburgerMenuAfter.style.transform = 'rotate(-45deg)';
        hamburgerMenuAfter.style.width = xWidth;
        hamburgerMenuAfter.style.transform = `0 calc(var(--bar-height) / 2)`;

        hamburgerMenuInput.style.opacity = '0';
        hamburgerMenuInput.style.width = '0';
    } else {
        hamburgerMenuBefore.style.transform = '';
        hamburgerMenuBefore.style.width = '';
        hamburgerMenuBefore.style.transform = '';

        hamburgerMenuAfter.style.transform = '';
        hamburgerMenuAfter.style.width = '';
        hamburgerMenuAfter.style.transform = '';

        hamburgerMenuInput.style.opacity = '';
        hamburgerMenuInput.style.width = '';
    }
};

hamburgerMenuInput.addEventListener('change', handleCheckboxChange);

const nav = document.querySelector('nav');

const handleNavTransition = () => {
    const animationTiming = getComputedStyle(document.body).getPropertyValue('--animation-timing');
    nav.style.transition = `translate ${animationTiming}`;
};

handleNavTransition();

nav.style.translate = '200%';
nav.style.transform = 'translateX(0)';
nav.style.padding = '0.5rem 1rem';
nav.style.paddingTop = `calc(var(--hamburger-height) + var(--hamburger-margin) + 1rem)`;
nav.style.backgroundColor = 'rgba(248, 248, 255, 0.9)';
nav.style.color = getComputedStyle(document.body).getPropertyValue('--background');
nav.style.maxWidth = '10rem';
nav.style.minHeight = '100%';
nav.style.textAlign = 'center';
nav.style.position = 'fixed';
nav.style.top = '0';
nav.style.right = '0';
nav.style.zIndex = '1';

if (hamburgerMenuInput.checked) {
    nav.style.translate = '0';
}

const navUl = document.createElement('ul');
const navLi = document.createElement('li');
const navLink = document.createElement('a');

nav.appendChild(navUl);
navUl.appendChild(navLi);
navLi.appendChild(navLink);

navUl.style.listStyleType = 'none';
navUl.style.margin = '0';
navUl.style.padding = '0';
navUl.style.display = 'inline-block';

navLi.style.display = 'inline';

navLink.style.display = 'inline-block';
navLink.style.color = '#000';
navLink.style.padding = '14px 16px';
navLink.style.textDecoration = 'none';

navLink.addEventListener('mouseenter', () => {
    navLink.style.backgroundColor = '#ff6347';
});

navLink.addEventListener('mouseleave', () => {
    navLink.style.backgroundColor = ''; // Återställ till standard bakgrundsfärg
});
