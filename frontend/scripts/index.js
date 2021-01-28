//elements
const main = document.querySelector('main')
const redSelector = document.querySelector('#red-button')
const yellowSelector = document.querySelector('#yellow-button')
const blueSelector = document.querySelector('#blue-button')
const greenSelector = document.querySelector('#green-button')
const purpleSelector = document.querySelector('#purple-button')

let currentColor = null
const selectors = [redSelector, yellowSelector, blueSelector, greenSelector, purpleSelector]

selectors.forEach(selector => {
    selector.addEventListener('click', function(e) {
        currentColor = selector.innerText
        console.log(currentColor)
    })
})


