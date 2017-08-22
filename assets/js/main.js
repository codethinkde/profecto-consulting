---
# Main JS File
---

{% include_relative piwik.js %}

{% include_relative vendor/jquery.validate.min.js %}
{% include_relative vendor/jquery.validate.messages_de.js %}

{% include_relative spambotscare.js %}
{% include_relative googlemaps.js %}

/**
 * jQuery Form Validator
 */
$("#contactform").validate({
    errorPlacement: function(error, element) {
        error.appendTo( element.closest("li") );
    },
});

/**
 * open and close mobile nav
 */
var allowScrolling = true;

$( "[name=mobieNavOperator]" ).on( "click", operateNavMenu );

function operateNavMenu( event ) {
    var action = $(this).attr('data');
    if( action == 'open' ) {
        $('html').addClass('c-page--nav-active');
        allowScrolling = false;
    } else {
        $('html').removeClass('c-page--nav-active');
        allowScrolling = true;
    }
}

// Enable/Disable Scrolling in iPhone/iPad’s Safari
document.ontouchmove = function (e) {
    if(allowScrolling) {
        // Enable scrolling.
        return true;
    } else {
        // Disable scrolling.
        e.preventDefault();
    }
}


/**
 * Affix Menu
 */
var nav     = $(".jsHeader"),
    navhgt  = $('.jsHeaderSticky').height(),
    navcss  = "is-scrolled";

$(window).scroll(function() {
    if( $(this).scrollTop() > navhgt ) {
        nav.addClass(navcss);
    } else {
        nav.removeClass(navcss);
    }
});


/**
 * Start Animations
 */
var hasAni = $("[data-has-ani]");
var started = [];
hasAni.each( function( i ) { started[i] = false; });
var viewport = $(window).height() * 0.85;

$(window).scroll(function() {
    var position = $(this).scrollTop();

    hasAni.each( function( index, element ) {
        var offset = $(element).offset().top;
        if( position > (offset - viewport) && (offset + viewport) > position && !started[index] ) {
            started[index] = true;
            $(element).find("[data-ani-start]").addClass("u-ani--start");
        };
    });
});
