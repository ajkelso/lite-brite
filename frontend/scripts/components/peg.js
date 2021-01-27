class Peg {
    constructor(color, canvas){
        this.color = color
        this.addToCanvas(canvas)
    }

    addToCanvas = (canvas) => {
        this.html = document.createElement('div')
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        svg.setAttribute('width', '30')
        svg.setAttribute('height', '30')
        let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle')
        circle.setAttribute('cx', '15')
        circle.setAttribute('cy', '15')
        circle.setAttribute('r', '14.5')
        circle.setAttribute('stroke', 'black')
        circle.setAttribute('stroke-width', '1')
        circle.setAttribute('fill', `${this.color}`)
    //change color event
        let mouseIsDown = false
        window.addEventListener('mousedown', () => mouseIsDown = true)
        window.addEventListener('mouseup', () => mouseIsDown = false)
        circle.addEventListener('mousedown', () => circle.setAttribute('fill', 'red'))
        circle.addEventListener('mouseover', () => {
            if (mouseIsDown){
                circle.setAttribute('fill', 'red')
            }
        })

        svg.appendChild(circle)
        this.html.append(svg)
        this.html.className = `peg ${this.color}` 
    }
} 