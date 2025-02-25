document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".swiper", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },  
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        keyboard: {
            enabled: true,
        },
        mousewheel: {
            thresholdDelta: 70,
        },
        spaceBetween: 30,
        loop: true,
        loopAdditionalSlides: 1,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0, 
            modifier: 1,
            slideShadows: false 
        }
    });
});