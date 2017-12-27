
$(document).ready(function(event) {

    $(".scroll-link").on('click', function() {

        var linkTo = $(this).attr('name');

        $('html, body').animate( {
            scrollTop: $(linkTo).offset().top
        }, 300);
    });

    $('.flipper').flip({
        trigger: 'click'
    });

    $('.flipper').on('mouseover', function () {
        $(this).css('transform', 'rotateY(30deg)')
    });

    $('.flipper').on('mouseleave', function () {
        $(this).css('transform', 'rotateY(0deg)')
    });
});
