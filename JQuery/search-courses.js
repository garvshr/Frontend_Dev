$(document).ready(function() {
    $('#searchInput').keyup(function() {
        const searchTerm = $(this).val().toLowerCase();
        let matchCount = 0;
        
        $('.course').each(function() {
            const courseText = $(this).text().toLowerCase();
            
            if (courseText.includes(searchTerm) && searchTerm !== '') {
                $(this).removeClass('hidden');
                $(this).css('background-color', '#fff3cd');
                matchCount++;
            } else if (searchTerm === '') {
                $(this).removeClass('hidden');
                $(this).css('background-color', '#f8f9fa');
            } else {
                $(this).addClass('hidden');
            }
        });
        
        if (searchTerm !== '') {
            $('#matchCount').text(matchCount + ' courses found');
        } else {
            $('#matchCount').text('');
        }
    });
    
    $('#clearSearch').click(function() {
        $('#searchInput').val('');
        $('.course').removeClass('hidden').css('background-color', '#f8f9fa');
        $('#matchCount').text('');
    });
});
