(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-rm]'),
      closeModalBtn: document.querySelector('[data-modal-close-rm]'),
      modal: document.querySelector('[data-modal-rm]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();