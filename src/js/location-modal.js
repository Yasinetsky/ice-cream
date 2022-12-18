(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-lo]'),
      closeModalBtn: document.querySelector('[data-modal-close-lo]'),
      modal: document.querySelector('[data-modal-lo]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();