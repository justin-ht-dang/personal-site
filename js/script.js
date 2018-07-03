
jQuery(document).ready(function(event) {

    jQuery(".scroll-link").on('click', function() {

        var linkTo = jQuery(this).attr('name');

        jQuery('html, body').animate( {
            scrollTop: jQuery(linkTo).offset().top
        }, 300);
    });
    
    $(".flipper").flip({
        trigger: 'manual'
    });

    jQuery(".btn").click(function(){
        jQuery('.flipper').flip('toggle');
    });

    // function(){
    //     $(".card").flip();
    // };
    // jQuery('.flipper').flip({
    //     trigger: 'click'
    // });

    // jQuery('.flipper').on('mouseover', function () {
    //     jQuery(this).css('transform', 'rotateY(30deg)')
    // });

    // jQuery('.flipper').on('mouseleave', function () {
    //     jQuery(this).css('transform', 'rotateY(0deg)')
    // });

    var options = {
        strings: ["cybersecurity.", "python.", "web development."],
        typeSpeed: 70,
  		startDelay: 500,
  		backSpeed: 30,
  		backDelay: 800,
        showCursor: true,
        loop: true,
        contentType: 'html'
    }
    var typed = new Typed('#title-text', options);

});
