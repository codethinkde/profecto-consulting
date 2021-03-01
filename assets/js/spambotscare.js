/*!
 * spambotscare v1.0.0
 * @author: Lukas Hermann <lukas@codethink.de>
 *
 * Use with the following html-tag:
 * <noscript data-defuscate data-name="lukas" data-domain="codethink.de"><em>Diese E-Mail-Adresse ist durch JavaScript geschützt</em></noscript>
 */
function spamrep() { this.href=this.href.replace(/spambotscare/,'') }
(function() {
    var spam = $("[data-defuscate]"), n = spam.attr("data-name"), d = spam.attr("data-domain");
    spam.each(function(e){
        var n = $(this).attr("data-name"), d = $(this).attr("data-domain");
        var nospam = "<a data-sbs href=\"mailto"+":"+n+"spambotscare@"+d+"\">"+n+"<span style=\"display: none;\">spambotscare</span>"+window.atob('QA==')+d+"</a>";
        $(this).replaceWith( nospam );
    });
    $("body").on( 'click', "[data-sbs]", spamrep );
    $("body").on( 'contextmenu', "[data-sbs]", spamrep );
})();
