const button = document.querySelector('#buynow');

const disableButton = () => {
    button.disabled = true;
};

button.addEventListener('click', disableButton);