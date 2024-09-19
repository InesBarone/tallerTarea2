const logInBtn = document.getElementById('login-btn');
const signUpBtn = document.getElementById('signup-btn');

logInBtn.addEventListener('click', () => {
    window.location.href = '/login'
})

signUpBtn.addEventListener('click', () => {
    console.log('aca');
    window.location.href = '/signup'
})