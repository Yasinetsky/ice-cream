const button = document.querySelector('#read-more');

const disableButton = () => {
    button.disabled = true;
};

button.addEventListener('click', disableButton);