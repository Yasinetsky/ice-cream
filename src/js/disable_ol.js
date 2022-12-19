const button = document.querySelector('#locations');

const disableButton = () => {
    button.disabled = true;
};

button.addEventListener('click', disableButton);