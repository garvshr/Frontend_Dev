$(document).ready(function() {
    const quotes = [
        "Believe you can and you're halfway there!",
        "Success is not final, failure is not fatal!",
        "The only way to do great work is to love what you do!",
        "Dream big and dare to fail!",
        "Your limitation—it's only your imagination!"
    ];
    
    function getTimeBasedGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning!";
        if (hour < 17) return "Good Afternoon!";
        return "Good Evening!";
    }
    
    $('#greeting').text(getTimeBasedGreeting());
    
    $('#changeGreeting').click(function() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        $('#greeting').text(randomQuote);
    });
    
    $('#toggleMessage').click(function() {
        $('#welcomeMessage').toggle();
    });
    
    $('#greeting').click(function() {
        alert('Welcome to our amazing website!');
    });
});
