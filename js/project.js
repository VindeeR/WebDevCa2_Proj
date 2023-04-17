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

const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 5000,
    wrap: true
})