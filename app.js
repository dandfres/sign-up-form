const formElement = document.querySelector('#form');

formElement.addEventListener('click', (event) => {
    console.log(event.target.tagName)

    if (event.target.tagName === 'BUTTON') {
        alert(`You've clicked 'Create Account.' In a real-world application, this would send your details to the server to create a new user account.`)
    } else if (event.target.tagName === 'A') {
        alert(`You've clicked 'Log in'. In a working app, this would redirect you to the login page to authenticate your account.`)
    }
})