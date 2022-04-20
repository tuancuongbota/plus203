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
    $(".slick-feedback").slick({
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
    // Scroll To Top //
    bota_backtotop();
    function bota_backtotop() {
        if ($('.bota_back_to_top').length) {
            var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('.bota_back_to_top').addClass('show');
                    } else {
                        $('.bota_back_to_top').removeClass('show');
                    }

                    if (scrollTop > ($(document).height() - 700)) {
                        $('.bota_back_to_top').addClass('end');
                    } else {
                        $('.bota_back_to_top').removeClass('end');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('.bota_back_to_top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    } window.bota_backtotop = bota_backtotop;
});