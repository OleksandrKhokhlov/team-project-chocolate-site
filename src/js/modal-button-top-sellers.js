(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-sellers-open]'),
    modal: document.querySelector('[data-sellers-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
