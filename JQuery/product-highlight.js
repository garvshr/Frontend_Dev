$(document).ready(function() {
    $('.product').click(function() {
        $(this).toggleClass('highlighted');
        
        if ($(this).attr('data-stock') === 'out-of-stock') {
            alert('Sorry, this product is out of stock!');
        }
    });
    
    $('.product').hover(
        function() {
            $(this).find('.details').fadeIn();
        },
        function() {
            $(this).find('.details').fadeOut();
        }
    );
    
    $('.favorite').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('selected');
    });
    
    $('[data-discount]').css({
        'box-shadow': '0 5px 15px rgba(40, 167, 69, 0.3)'
    });
});
