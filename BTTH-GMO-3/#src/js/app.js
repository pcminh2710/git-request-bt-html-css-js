//slide social
$('.clients__social').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
        `<button type='button' class='slick-prev pull-left slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow:
        `<button type='button' class='slick-next pull-right slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                arrows: false,
                dots: false
            }
        }
    ]
});
//slide rewwiew
$('.review__items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        // review mobile
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: false,
                arrows: true,
                prevArrow:
                    `<button type='button' class='slick-prev pull-left slick-arrow-mobile'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
                nextArrow:
                    `<button type='button' class='slick-next pull-right slick-arrow-mobile'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,

            }
        }
    ]
});
//slide about us
$('.aboutus__img__slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

//slide pricing__order__mobile
$('.pricing__order__mobile').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    prevArrow:
        `<button type='button' class='slick-prev pull-left slick-arrow-mobile'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow:
        `<button type='button' class='slick-next pull-right slick-arrow-mobile'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
});

// show menu
function showMenu() {
    document.querySelector('.menu-mobile').classList.toggle('show');
}

