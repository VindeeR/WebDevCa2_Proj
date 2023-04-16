$(document).ready(function() {

    $("#show").click(function() {
        showPopup();
    });

    $("#popup").click(function() {

        $(this).hide();
        $("#mask").hide();

    });

});


function showPopup() {
    // show the mask
    $("#mask").fadeTo(500, 0.25);

    // show the popup
    $("#popup").show();
}