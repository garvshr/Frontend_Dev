$j1(document).ready(function() {
    let currentSlide = 0;
    const slides = $j1('.carousel-item');
    
    $j1('#nextSlide').click(function() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides.eq(currentSlide).addClass('active');
    });
    
    $j1('#prevSlide').click(function() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides.eq(currentSlide).addClass('active');
    });
    
    $j1('.widget-item').click(function() {
        $j1('.widget-item').removeClass('active');
        $j1(this).addClass('active');
    });
});

$j2(document).ready(function() {
    $j2('#openModal').click(function() {
        $j2('#modal').fadeIn();
    });
    
    $j2('.close').click(function() {
        $j2('#modal').fadeOut();
    });
    
    $j2(window).click(function(e) {
        if ($j2(e.target).is('#modal')) {
            $j2('#modal').fadeOut();
        }
    });
    
    $j2('.widget-item').hover(function(e) {
        const tooltipText = $j2(this).attr('data-tooltip');
        $j2('.tooltip').text(tooltipText).css({
            display: 'block',
            left: e.pageX + 10 + 'px',
            top: e.pageY + 10 + 'px'
        });
    }, function() {
        $j2('.tooltip').hide();
    });
    
    $j2('.widget-item').mousemove(function(e) {
        $j2('.tooltip').css({
            left: e.pageX + 10 + 'px',
            top: e.pageY + 10 + 'px'
        });
    });
});
