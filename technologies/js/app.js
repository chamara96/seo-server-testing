$(function ($) {
    $(window).on('load', function () {
       /* console.log("Windows on Load DONE");
        //Main Code
        console.log("Body Loaded");*/
        svgdrawing();

        setTimeout(() => {
            $("#splashtag").css("display", "block");
            splashtag_anim();
            $("#logo-div").addClass("playanime");
            $("svg").addClass("playanime");
            $("#landingDiv").addClass("playanime");

            setTimeout(()=>{
                $("#splashtag").fadeOut(2000);
            },2000);
            
        }, 3000);

        setTimeout(() => {
            // $("#splashtag").css("display", "block");
            // $(".section").css("z-index", "-120");
            // $(".section").css("display", "block");
            $("#logo_img_div_desk").fadeIn(20);
            
            // $("#mymenu a").fadeIn(2000);
            $("#landingDiv").delay(1000).fadeOut(2000);
            $("#landingDiv").css("display", "none");
            

            

        }, 9000);


    });


    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        $('.section').each(function () {
            var topDistance = $(this).offset().top;
            if ((topDistance - 100) < scrollTop) {
                var sec = $(this).attr('menu-sec')
                // var active_1 = $('li[id='+sec+']');
                $('#newheader2 a').css('color', $(this).attr('data-color'));
                $('.menu-item').removeClass('active');
                $('li[id=' + sec + ']').addClass('active');
            }
        });
    });



});