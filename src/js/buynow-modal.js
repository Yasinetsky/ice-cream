(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-bn]'),
      closeModalBtn: document.querySelector('[data-modal-close-bn]'),
      modal: document.querySelector('[data-moda-bn]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();