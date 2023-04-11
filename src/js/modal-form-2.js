(() => {
  const refs2 = {
    openModalBtn: document.querySelector('[data-modal-open-2]'),
    closeModalBtn: document.querySelector('[data-modal-close-2]'),
    modal: document.querySelector('[data-modal-2]'),
  };

  refs2.openModalBtn.addEventListener('click', toggleModal);
  refs2.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs2.modal.classList.toggle('is-hidden-2');
  }
})();
