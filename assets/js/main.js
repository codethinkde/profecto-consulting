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


var     nav     = $(".c-page-header__nav");
        navscr  = "c-page-header__nav--scrolled";
        navhgt  = $('.c-page-header__sticky').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > navhgt ) {
    nav.addClass(navscr);
  } else {
    nav.removeClass(navscr);
  }
});
