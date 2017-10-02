// import $ from "jquery";
import "jquery-form-validator";
// require("jquery-form-validator/form-validator/jquery.form-validator.js");
require("jquery-form-validator/form-validator/lang/de.js");
require("jquery-form-validator/form-validator/security.js");

$(document).ready(function() {
    $.validate({
        form: "#contactform",
        lang: "de",
        modules: "security",
        reCaptchaSiteKey: "6Lc63DIUAAAAAFCMueEwxp3dk_Rp1KW5ZpzTSDpj",
        onError: function(form) {
            console.log(form);
            // alert("Validation of form " + $form.attr("id") + " failed!");
        },
        onElementValidate: function(valid, $el, $form, errorMess) {
            console.log(
                "Input " +
                    $el.attr("name") +
                    " is " +
                    (valid ? "VALID" : "NOT VALID")
            );
        }
    });
});
