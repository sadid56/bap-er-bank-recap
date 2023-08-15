document.getElementById('login-btn').addEventListener('click', function(){
    const userInputField = document.getElementById('user-email');
    const userInput = userInputField.value;
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    //! It's a not perfect site!
    if(userInput === 'sadidhasan56@gmail.com' && userPassword === 'sadid9756'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please provide me a valid number or password!')
    }
})