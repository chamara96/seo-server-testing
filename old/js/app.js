$(function ($) {
    $(window).on('load', function () {
        console.log("Windows on Load DONE");
        // var scroll = new SmoothScroll('a[href*="#"]');
        // resize();
        // canvasApp();
        // $("#canvasOne").fadeIn(2000);

        $('#SVGmator').attr('src', 'https://www.svgmator.com/embed/1vys9Qhzq3jqXeQ?onload=true&onclick=false&onhover=false');
        // $("#logo-div").fadeIn(100);
        $('#SVGmator').load(function () {
            $(this).show();
            $("#logo-div").css("display", "block");
            console.log('iframe loaded successfully');
            $("#logo-div").addClass("playanime");
            $("#SVGmator").addClass("playanime");
           
            setTimeout(() => {
                $("#splashtag").css("display", "block");
                splashtag_anim();
            }, 6000);

            setTimeout(() => {
                $(".section").css("z-index", "-120");
                $(".section").css("display", "block");
                $("#splashtag").fadeOut(2000);
                $("#mymenu a").fadeIn(2000);
                $("#landingDiv").delay(1000).fadeOut(2000);

                setTimeout(() => {
                    console.log("ABCD efcg");
                    $(".slider-items").fadeIn(2000);
                    $("header").css("display", "block");
                    $(".tw-slider-area").owlCarousel({
                        items: 1,
                        loop: true,
                        autoplay: true,
                        // nav: false,//true
                        // dots: true,
                        // dotsEach:true,
                        autoplayTimeout: 8000,
                        autoplayHoverPause: false,
                        mouseDrag: false,
                        touchDrag: true,
                        smartSpeed: 1100,
                        // navText: ['<i class="icon icon-left-arrow2">', '<i class="icon icon-right-arrow2">'],
                        responsive: {
                            1024: {
                                mouseDrag: true,
                            }
                        }
                    });
                }, 2000);

            }, 9000);

            // $("#splashtag").delay(6000).fadeOut(2000);
        });

        console.log("Lst")
        // svgdrawing();
        // splashtag_anim();

        // $("#canvasOne").fadeIn(2000, function () {
        //     $("#splashtag").delay(6000).fadeOut(2000);
        //     $("#canvasOne").delay(5000).fadeOut(2000);
        //     $(".slider-items").delay(7000).fadeIn(2000);
        // });

    });

    // setTimeout(() => {

    //     $(".tw-slider-area").owlCarousel({
    //         items: 1,
    //         loop: true,
    //         autoplay: true,
    //         // nav: false,//true
    //         // dots: true,
    //         // dotsEach:true,
    //         autoplayTimeout: 8000,
    //         autoplayHoverPause: false,
    //         mouseDrag: false,
    //         touchDrag: true,
    //         smartSpeed: 1100,
    //         // navText: ['<i class="icon icon-left-arrow2">', '<i class="icon icon-right-arrow2">'],
    //         responsive: {
    //             1024: {
    //                 mouseDrag: true,
    //             }
    //         }
    //     });


    // }, 9500);

    $('.menu-item').on('click', function () {
        $('.menu-item').removeClass('active');
        $(this).addClass('active');
    });


    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        $('.section').each(function () {
            var topDistance = $(this).offset().top;
            if ((topDistance - 100) < scrollTop) {
                var sec=$(this).attr('menu-sec')
                // var active_1 = $('li[id='+sec+']');
                $('#newheader2 a').css('color', $(this).attr('data-color'));
                $('.menu-item').removeClass('active');
                $('li[id='+sec+']').addClass('active');
            }
        });
    });


    /* Back to top */
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.back-to-top button').fadeIn();
        } else {
            $('.back-to-top button').fadeOut();
        }
    });

    $(".back-to-top button").on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });


    // $(window).on("resize", function () {
    //     resize();
    // });

});