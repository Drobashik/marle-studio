import Swiper, { Navigation, EffectCoverflow } from 'swiper';

Swiper.use([Navigation, EffectCoverflow]);

function init() {
    
    const swiper = new Swiper(".swiper", {
        effect: 'coverflow',
        slidesPerView: getSlidesPerView(),
        spaceBetween: setSpaceBetween(),
        navigation: {
            nextEl: "#next",
            prevEl: "#prev",
        },
        coverflowEffect: {
            slideShadows: false,
            rotate: 0,
            stretch: -50,
        },
        centeredSlides: false,
    });
    
    swiper.slideTo(0, false, false);
    
}

function setSpaceBetween() {
    const width = window.innerWidth;

    if (width > 1440)
    return 30;
    
    if (width > 950)
    return 20;
    
    if (width < 550)
    return 1;
    
    return 2;
}

function getSlidesPerView() {
    const width = window.innerWidth;
    
    if (width > 1440)
    return 3;
    
    if (width > 950)
    return 2;
    
    if (width < 550)
    return 1;
    
    return 2;
}

init();
window.addEventListener('resize', init);