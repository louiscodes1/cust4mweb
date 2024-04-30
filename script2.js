document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector('.container').classList.add('show');

    // Function to play/pause background music
    var backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.volume = 0.3; // Adjust the volume as needed
    document.body.addEventListener('click', function() {
        if (backgroundMusic.play) {
            backgroundMusic.play();
        } else {
            backgroundMusic.play();
        }
    });

    // Real-time date display
    function updateDate() {
        var currentDateElement = document.getElementById('currentDate');
        var currentDate = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        currentDateElement.textContent = currentDate.toLocaleDateString('en-US', options);
    }

    // Call updateDate function initially
    updateDate();

    // Update date every second
    setInterval(updateDate, 1000);

    // Event listeners for button clicks
    document.getElementById('customizedDesignBtn').addEventListener('click', function() {
        // Redirect to index4.html
        window.location.href = 'index4.html';
    });

    document.getElementById('personalizedMessageBtn').addEventListener('click', function() {
        // Redirect to html3.html
        window.location.href = 'index3.html';
    });

    document.getElementById('virtualGiftsBtn').addEventListener('click', function() {
        // Trigger action to add virtual gifts
        alert('Message me <3 :D ( only the GIRL i love ! :D )');
    });

    document.getElementById('guestbookBtn').addEventListener('click', function() {
        // Redirect to html3.html
        window.location.href = 'index5.html';
    });
});
