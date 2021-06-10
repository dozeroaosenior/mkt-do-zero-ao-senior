$(document).ready(function () {
    $(".carrossel").slick({
        autoplay: true,
        autoplaySpeed: 3000
    });


    $('.galeria').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

})