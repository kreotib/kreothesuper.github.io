document.addEventListener("DOMContentLoaded", () => {
    const reviewSlider = new Swiper('.review-slider', {
        spaceBetween:16,
        slidesPerView:'auto',
        freeMode:true,
        grid:{
            fill:'row',
            rows:2,
        }
    });

    // faq 
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length) {
        faqItems.forEach(faqItem => {
            const faqItemHeader = faqItem.querySelector('.faq-item__header');

            faqItemHeader.addEventListener("click", (e) => {
                e.preventDefault();

                faqItem.classList.toggle('faq-item--active');
            });
        });
    }

    // menu

    const burger = document.querySelector('.burger'),
    mobileMenu = document.querySelector('.mobile-menu'),
    headerSupport = document.querySelector('.header__support');

    burger.addEventListener('click',(e)=>{
        e.preventDefault();

        mobileMenu.classList.toggle('mobile-menu--active');
        headerSupport.classList.toggle('header__support--active')
        burger.classList.toggle('burger--active');
    });

    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroSlider = document.querySelector('.hero-slider');

    if(heroSlides.length){
        heroSlides.forEach((element,index)=>{
            element.addEventListener('click',(e)=>{
                e.preventDefault();

                heroSlides.forEach(slide=>{
                    slide.classList.remove('hero-slide--active');
                })
                
                heroSlider.dataset.current = index;
                element.classList.add('hero-slide--active');
            });
        });
    }
});