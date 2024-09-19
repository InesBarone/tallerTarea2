const nicknameLoginInput = document.getElementById('nickname-login');
const passwordLoginInput = document.getElementById('password-login');
const submitLoginBtn = document.getElementById('submit-login-btn');

submitLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (nicknameLoginInput.value === 'pepito123' 
    && passwordLoginInput.value === 'contraseña123') {
        window.location.href = '/cliente';        
    } else if (nicknameLoginInput.value === 'pluna123' 
    && passwordLoginInput.value === 'contraseña1234') {
        window.location.href = '/aerolinea';        
    } else {
        console.log('Error')
        // insertar toast de error
    }
})