$(document).ready(function() {
    $(".slick_slideshow").slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $('.bota_header_search_btn').on('click', function(e){
		e.preventDefault();
		$('.bota_header').toggleClass('active');
		$(this).toggleClass('active');
	});
    $(window).on('load', function () {
		AOS.refresh();
	})
	AOS.init({
		startEvent: 'load',
		easing: 'ease-out-back',
		duration: 1500,
		once: true
	});
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $(".bota_block_technology_title").on("click", function () {
        $(this).toggleClass("open");
        $(this).next().slideToggle();
    });
});