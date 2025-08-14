// js/menu.js
;(() => {
  const menu = document.querySelector('[data-menu]')
  const openBtn = document.querySelector('[data-menu-open]')
  const closeBtns = document.querySelectorAll('[data-menu-close]')

  if (!menu || !openBtn) return

  const open = () => {
    menu.classList.add('is-open')
    // document.body.classList.add('no-scroll'); // якщо захочеш блокувати скрол
  }

  const close = () => {
    menu.classList.remove('is-open')
    // document.body.classList.remove('no-scroll');
  }

  const toggle = () => (menu.classList.contains('is-open') ? close() : open())

  // навішуємо слухачі
  openBtn.addEventListener('click', toggle)
  closeBtns.forEach((btn) => btn.addEventListener('click', close))

  // Закривати по Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close()
  })

  // Закривати при кліку поза меню
  menu.addEventListener('click', (e) => {
    // клік по бекдропу (порожне місце), а не по контенту
    if (e.target === menu) close()
  })

  // Гарантовано закрити на старті
  close()

  // При переході на tablet/desktop — закривати, щоб не «залипало»
  const mql = window.matchMedia('(min-width: 768px)')
  const handleMQ = () => close()
  if (mql.addEventListener) mql.addEventListener('change', handleMQ)
  else mql.addListener(handleMQ)
})()
