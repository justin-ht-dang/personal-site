
jQuery(document).ready(function(event) {

    $(".flipper").flip({
        trigger: 'manual'
    });

    
    $(".btn").click(function(){
        $('.flipper').flip('toggle');
    });

    $('#contact-button').click(function(){
        if ($('#contact-list').is(':visible')) {
            $('#contact-list').hide();
            $('#detailed-contact').show();
        }
        else {
            $('#detailed-contact').hide();
            $('#contact-list').show();
        }
    });
        
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
