document.addEventListener('DOMContentLoaded', () => {
    const tl = new TimelineMax();

    tl
        .fromTo('.bg-video', 0.5, 
            { opacity: 0 },
            { opacity: 1, ease: Expo.easeInOut })
        .fromTo('.nav-logo', 0.8, 
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
        .fromTo('.menu-links', 0.8, 
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
        .fromTo('.social-links', 0.8, 
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
        .fromTo('.container-info', 0.8, 
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
        .fromTo('.container-animation', 0.8, 
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5')
});
