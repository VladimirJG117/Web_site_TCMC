function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}


/*
// Verificar si existe el botón de cierre del popup antes de agregar el event listener
const closePopupButton = document.getElementById('closePopup');
if (closePopupButton) {
    closePopupButton.addEventListener('submit', function() {
        // Limpiar el formulario
        if (customForm) {
            customForm.reset();
        }

        // Ocultar el popup
        document.getElementById('popup').style.display = 'none';

        // Redirigir a la página de inicio después de 2 segundos
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 2000);
    });
}

// Validar el email
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
    */

