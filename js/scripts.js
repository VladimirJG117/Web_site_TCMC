function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

document.getElementById('customForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Show popup
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
    // Clear the form
    document.getElementById('customForm').reset();

    // Hide the popup
    document.getElementById('popup').style.display = 'none';

    // Redirect to homepage after 2 seconds
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 2000);
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}