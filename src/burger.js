const procedureButtons = document.querySelectorAll('#arrow');
const burger = document.getElementById('burger');
const asideBackground = document.querySelector('.head__aside-bg');
const crossBurger = document.querySelector('.aside__close');
const burgerList = document.querySelector('#burger-list');

for (const element of burgerList.children) {
    element.addEventListener("click", () => {
        asideBackground.className = 'head__aside-bg';
        document.querySelector('html').style.overflowY = 'auto';
    });
}

for (const element of Array.from(procedureButtons)) {
    element.addEventListener('click', function() {
        this.closest('.card').classList.toggle('animate');
    });
}

burger.addEventListener('click', () => {
    asideBackground.classList.toggle('opened');
    document.querySelector('html').style.overflowY = 'hidden';
});

crossBurger.addEventListener('click', () => {
    asideBackground.className = 'head__aside-bg';
    document.querySelector('html').style.overflowY = 'auto';
});

asideBackground.addEventListener('click', (event) => {
    if (event.target.className === 'head__aside-bg opened')
        asideBackground.className = 'head__aside-bg';
});