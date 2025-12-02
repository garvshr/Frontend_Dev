$(document).ready(function() {
    let rotateInterval;
    
    $('#hideBanners').click(function() {
        $('.banner').hide();
    });
    
    $('#showBanners').click(function() {
        $('.banner').show();
    });
    
    $('#slideToggle').click(function() {
        $('.banner').slideToggle();
    });
    
    $('#fadeToggle').click(function() {
        $('.banner').fadeToggle();
    });
    
    $('#autoRotate').click(function() {
        if (rotateInterval) {
            clearInterval(rotateInterval);
            rotateInterval = null;
            $(this).text('Auto Rotate');
        } else {
            let currentIndex = 0;
            $('.banner').hide();
            $('.banner').eq(0).fadeIn();
            
            rotateInterval = setInterval(function() {
                $('.banner').eq(currentIndex).fadeOut(500, function() {
                    currentIndex = (currentIndex + 1) % $('.banner').length;
                    $('.banner').eq(currentIndex).fadeIn(500);
                });
            }, 5000);
            
            $(this).text('Stop Rotation');
        }
    });
});
