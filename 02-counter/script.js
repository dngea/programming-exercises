// document.querySelectorAll()
// forEach()
// addEventListener()
// currentTargetproperty
// classList
// textContent

const number = document.querySelector('#number') // query selector + #id
const buttons = document.querySelectorAll('.btn') // query selector + .class

let count = 0
const updateCount = () => {
    number.textContent = count

    number.style.color = 
    count > 0 ? 'green'
    : count < 0 ? 'red'
    : 'black'
}
updateCount()


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnClass = e.currentTarget.classList

        if (btnClass.contains('decrease')) {
            count --
        } else if (btnClass.contains('increase')) {
            count ++
        } else if((btnClass.contains('reset'))) {
            count = 0
        }

        updateCount()
    })
})