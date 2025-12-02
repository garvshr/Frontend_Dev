$(document).ready(function() {
    $(document).on('click', '.subscribe', function() {
        const item = $(this).closest('.subscription-item');
        item.addClass('subscribed');
        $(this).text('Unsubscribe').removeClass('subscribe').addClass('unsubscribe');
        showMessage('Successfully subscribed!');
    });
    
    $(document).on('click', '.unsubscribe', function() {
        const item = $(this).closest('.subscription-item');
        item.removeClass('subscribed');
        $(this).text('Subscribe').removeClass('unsubscribe').addClass('subscribe');
        showMessage('Successfully unsubscribed!');
    });
    
    $('#addTopic').click(function() {
        const topic = $('#newTopic').val().trim();
        if (topic) {
            const newItem = $('<div class="subscription-item"><h3>' + topic + '</h3><button class="subscribe">Subscribe</button></div>');
            $('.subscription-list').append(newItem);
            $('#newTopic').val('');
            showMessage('New topic added successfully!');
        }
    });
    
    function showMessage(text) {
        $('#message').text(text).fadeIn().delay(2000).fadeOut();
    }
});
