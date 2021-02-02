//elements
const main = document.querySelector('main')
const redSelector = document.querySelector('#red-button')
const yellowSelector = document.querySelector('#yellow-button')
const blueSelector = document.querySelector('#blue-button')
const greenSelector = document.querySelector('#green-button')
const purpleSelector = document.querySelector('#purple-button')
const canvas = document.querySelector('#canvas')
let mouseIsDown = false

window.addEventListener('mousedown', () => mouseIsDown = true)
window.addEventListener('mouseup', () => mouseIsDown = false)

let currentColor = null
const selectors = [redSelector, yellowSelector, blueSelector, greenSelector, purpleSelector]

selectors.forEach(selector => {
    selector.addEventListener('click', function(e) {
        currentColor = selector.innerText
    })
})

const c1 = new Canvas()
// const saveButton = document.querySelector('.save-button')
const pegs = document.querySelectorAll('.peg')

const api = new APIAdapter



