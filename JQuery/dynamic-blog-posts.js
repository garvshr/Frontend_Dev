$(document).ready(function() {
    let postCounter = 1;
    
    $('#addPost').click(function() {
        const newPost = $('<div class="post"><h3>New Blog Post ' + postCounter + '</h3><p>This is a dynamically added post</p><div class="tags"><span class="tag">New</span><span class="tag">Dynamic</span></div></div>');
        $('.posts').append(newPost);
        postCounter++;
    });
    
    $('#prependPost').click(function() {
        const featuredPost = $('<div class="post featured"><h3>⭐ Featured Post ' + postCounter + '</h3><p>This is a featured post at the top</p><div class="tags"><span class="tag">Featured</span><span class="tag">Top</span></div></div>');
        $('.posts').prepend(featuredPost);
        postCounter++;
    });
    
    $('#removeLastPost').click(function() {
        $('.posts .post').last().fadeOut(function() {
            $(this).remove();
        });
    });
    
    $('#highlightKeyword').click(function() {
        const keyword = $('#searchKeyword').val().toLowerCase();
        
        $('.post').each(function() {
            const postText = $(this).text().toLowerCase();
            if (postText.includes(keyword) && keyword !== '') {
                $(this).addClass('highlighted');
            } else {
                $(this).removeClass('highlighted');
            }
        });
    });
});
