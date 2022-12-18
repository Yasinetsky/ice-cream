(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-ab]'),
      closeModalBtn: document.querySelector('[data-modal-close-ab]'),
      modal: document.querySelector('[data-modal-ab]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();