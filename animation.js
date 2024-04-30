document.addEventListener("DOMContentLoaded", function(event) { 
    document.querySelector('.container').classList.add('show');

    // Create a div element for cursor
    var cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    // Listen for mousemove event
    document.addEventListener('mousemove', function(e) {
        // Set the cursor position to the mouse position
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Update date in the UI
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
});
