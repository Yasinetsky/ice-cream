const button = document.querySelector('#how_its_made');

const disableButton = () => {
    button.disabled = true;
};

button.addEventListener('click', disableButton);