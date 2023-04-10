(() => {
  const refs1 = {
    openModalBtn: document.querySelector('[data-modal-open-1]'),
    closeModalBtn: document.querySelector('[data-modal-close-1]'),
    modal: document.querySelector('[data-modal-1]'),
  };

  refs1.openModalBtn.addEventListener('click', toggleModal);
  refs1.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs1.modal.classList.toggle('is-hidden-1');
  }
})();
