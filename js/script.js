
$(document).ready(function(event) {
    
    $(".scroll-link").on('click', function() {
        
        var linkTo = $(this).attr('name');

        $('html, body').animate( {
            scrollTop: $(linkTo).offset().top
        }, 400);
    });
});
