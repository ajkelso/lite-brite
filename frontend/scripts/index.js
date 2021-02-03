//elements
const main = document.querySelector('main')
const redSelector = document.querySelector('#red-button')
const yellowSelector = document.querySelector('#yellow-button')
const blueSelector = document.querySelector('#blue-button')
const greenSelector = document.querySelector('#green-button')
const purpleSelector = document.querySelector('#purple-button')
const canvas = document.querySelector('#canvas')
const sidebar = document.querySelector('#sidebar')
let mouseIsDown = false

window.addEventListener('mousedown', () => mouseIsDown = true)
window.addEventListener('mouseup', () => mouseIsDown = false)

let currentColor = null
const selectors = [redSelector, yellowSelector, blueSelector, greenSelector, purpleSelector]

selectors.forEach(selector => {
    selector.addEventListener('click', function(e) {
        currentColor = selector.innerText
        
        //make all other buttons look disabled
        //change current color to look active
    })
})

const api = new APIAdapter
const c1 = new Canvas()
// const pegs = document.querySelectorAll('.peg')
// const b1 = new sidebar()
// const dList = new DrawingList()



