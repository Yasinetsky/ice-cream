const button = document.querySelector('#franchise');

const disableButton = () => {
    button.disabled = true;
};

button.addEventListener('click', disableButton);