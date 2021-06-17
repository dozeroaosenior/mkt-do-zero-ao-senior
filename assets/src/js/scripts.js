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

    $(".servico-btn").on("click", function(e){
        e.preventDefault();
        let plano = $(this).data("plano");
        $("#plano").val(plano);
        destino = $("#contato").offset().top;
        $('html, body').animate({ 
            scrollTop: destino - 100
        }, 500);
    })
})