$(document).ready(function() {
    $('.manager').click(function() {
        $(this).parent('.department').find('.employee').toggleClass('highlighted');
    });
    
    $('.employee, .manager').hover(function() {
        $(this).find('.contact').slideDown();
    }, function() {
        $(this).find('.contact').slideUp();
    });
    
    $('.department h2').click(function() {
        $(this).parent('.department').toggleClass('dept-highlighted');
        $(this).parent('.department').children('.employee, .manager').toggleClass('dept-highlighted');
    });
    
    $('.employee').eq(0).click(function() {
        $(this).siblings('.employee').addClass('highlighted');
    });
    
    $('#collapseAll').click(function() {
        $('.employee, .manager').slideToggle();
    });
});
