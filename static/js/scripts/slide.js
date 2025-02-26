document.addEventListener("DOMContentLoaded", function() {
    Promise.all(Array.from(document.images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
            img.onload = img.onerror = resolve;
        });
    })).then(() => {
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
            spaceBetween: 10,
            loop: true,
            loopAdditionalSlides: 1,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
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
});