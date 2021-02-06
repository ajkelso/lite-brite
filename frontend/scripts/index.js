//elements
const main = document.querySelector('main')
const redSelector = document.querySelector('#red-button')
const yellowSelector = document.querySelector('#yellow-button')
const blueSelector = document.querySelector('#blue-button')
const greenSelector = document.querySelector('#green-button')
const violetSelector = document.querySelector('#violet-button')
const orangeSelector = document.querySelector('#orange-button')
const whiteSelector = document.querySelector('#white-button')
const blackSelector = document.querySelector('#black-button')
const canvas = document.querySelector('#canvas')
const sidebar = document.querySelector('#sidebar')
const pop = document.querySelector('#pop')
const click = document.querySelector('#click')
let mouseIsDown = false

window.addEventListener('mousedown', () => mouseIsDown = true)
window.addEventListener('mouseup', () => mouseIsDown = false)

let currentColor = null
const selectors = [redSelector, yellowSelector, blueSelector, greenSelector, violetSelector, orangeSelector, whiteSelector, blackSelector]

selectors.forEach(selector => {
    selector.addEventListener('click', function(e) {
        currentColor = selector.innerText
        click.play()
        selectors.forEach(selector => selector.style.backgroundColor = 'rgb(141, 140, 140)')
        selector.style.backgroundColor = selector.innerText 
        
        //make all other buttons look disabled
        //change current color to look active
    })
})

const api = new APIAdapter
const c1 = new Canvas()
// const pegs = document.querySelectorAll('.peg')
// const b1 = new sidebar()
// const dList = new DrawingList()



