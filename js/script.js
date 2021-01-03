$(document).ready(function($) {
    $('.counter').counterUp({
        delay: 50,
        time: 5000
    });

    // curve text
    var crv = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('.text1').curvedText({
        curve:    crv,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });
    new WOW().init();
});