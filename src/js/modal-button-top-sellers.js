(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-sellers-open]'),
    closeModalBtn: document.querySelector('[data-sellers-close]'),
    modal: document.querySelector('[data-sellers-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
