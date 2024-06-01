// script.js

$(document).ready(function() {
    // Animate on scroll
    $('.animate__animated').waypoint(function() {
        $(this.element).addClass('animate__fadeIn');
    }, {
        offset: '75%'
    });

    // Smooth scrolling for internal links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Skills progress bar animation
    $('.progress-line span').each(function() {
        $(this).animate({
            width: $(this).parent().attr('data-progress') + '%'
        }, 1000);
    });
});
