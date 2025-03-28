// 'scroll' event
// window.scrollY
// document.documentElement.scrollTop

const nav = document.getElementById('nav')
const caja2 = document.querySelector('.caja2')

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY

  if (currentScroll > lastScroll && currentScroll > caja2.offsetTop - 200) {
    
    nav.classList.add('nav-hide')
  } else {
    nav.classList.remove('nav-hide')
  }

  lastScroll = currentScroll
})