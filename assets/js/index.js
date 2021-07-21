$( "#a" ).on( "click", function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section1").offset().top
    }, 100);
});

$( "#b" ).on( "click", function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section2").offset().top
    }, 100);
});

$( "#c" ).on( "click", function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section3").offset().top
    }, 100);
});

$( "#d" ).on( "click", function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section4").offset().top
    }, 100);
});



