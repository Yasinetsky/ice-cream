const button = document.querySelector('#product');

const disableButton = () => {
    button.disabled = true;
};

button.addEventListener('click', disableButton);