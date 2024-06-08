// script.js


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
    $(document).ready(function() {
        AOS.init();
        new Typed('#typed-name', {
            strings: ["Seifeldin Ibrahim Ahmed Mahmoud"],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 5000,
            loop: true
        });
    });
