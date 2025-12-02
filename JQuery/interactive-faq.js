$(document).ready(function() {
    $('.question').click(function() {
        $(this).next('.answer').slideToggle();
    });
    
    $('.question').hover(
        function() {
            $(this).css('background-color', '#00f2fe');
        },
        function() {
            $(this).css('background-color', '#4facfe');
        }
    );
    
    $('.question').dblclick(function() {
        $('.answer').slideUp();
    });
    
    $('.answer').focus(function() {
        $(this).parent('.faq-item').addClass('highlight');
    });
    
    $('.answer').blur(function() {
        $(this).parent('.faq-item').removeClass('highlight');
    });
});
