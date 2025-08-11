; (() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]')
  }

  refs.openModalBtn.addEventListener('click', toggleModal)
  refs.closeModalBtn.addEventListener('click', toggleModal)

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open')
  }
})()

  ; (() => {
    const contactLink = document.querySelector(
      '.page-nav-link-mobile[data-modal-open][data-menu-close]'
    )
    const mobileMenu = document.querySelector('[data-menu]')
    const modal = document.querySelector('[data-modal]')

    if (contactLink) {
      contactLink.addEventListener('click', (e) => {
        e.preventDefault()

        // Закриваємо мобільне меню
        mobileMenu.classList.remove('is-open')

        // Відкриваємо модалку
        modal.classList.add('is-open')
      })
    }
  })()
