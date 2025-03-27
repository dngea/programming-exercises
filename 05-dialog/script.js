const dialog = document.querySelector('dialog')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  dialog.showModal()
})

document.addEventListener('click', (e) => {
  if (e.target !== btn && !dialog.contains(e.target)) {
    dialog.close()
  }
})

