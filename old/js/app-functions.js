function svgdrawing() {
    var path = document.querySelector('path');
    var length = path.getTotalLength();

    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
        'none';

    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;

    // Trigger a layout so styles are calculated & the browser 
    // picks up the starting position before animating
    path.getBoundingClientRect();

    // Define our transition
    path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 7s ease-in-out';

    // Go!
    path.style.strokeDashoffset = '0';
}

function splashtag_anim() {

    var
        easer1 = "Circ.easeInOut",
        easer2 = "Quad.easeInOut",
        easer3 = "Circ.easeIn",
        easer4 = "Circ.easeOut",
        easer5 = "Quad.easeOut";

    var splashtag = document.getElementById('splashtag');


    var st_gs = new SplitText(splashtag, { type: "words,chars" }),
        st_chars = st_gs.chars,
        st_l = st_gs.chars.length;

    for (i = 0; i < st_l / 2; i++) {
        TweenMax.from(splashtag, 1.5, { autoAlpha: 1, ease: easer5 });
        TweenMax.from([st_chars[Math.floor(st_l / 2) + i], st_chars[Math.floor(st_l / 2) - i]], 1, { y: 100, opacity: 0, ease: Back.easeOut, delay: i * 0.2 });
    };
    $init_done = "true";
    // initlogoscale();
}

// function resize() {
//     $("#canvasOne").outerWidth($(window).width() - $("#canvasOne").offset().top - Math.abs($("#canvasOne").outerWidth(true) - $("#canvasOne").outerWidth()));
// }