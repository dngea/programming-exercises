//    documento.querySelector()
  //  addEventListener()
    //classList.alternar()

const button = document.querySelector('.toggle')
const links = document.querySelector('.links')

button.addEventListener('click', () => {
  links.classList.toggle('show-links')
  button.classList.toggle('rotate')
})