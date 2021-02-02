class Peg {
    constructor(color, canvas){
        this.color = color
        this.addToCanvas(canvas)
    }

    addToCanvas = (canvas) => {
        this.html = document.createElement('div')
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        svg.setAttribute('width', '20')
        svg.setAttribute('height', '20')
        let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle')
        circle.classList.add('peg')
        circle.setAttribute('cx', '10')
        circle.setAttribute('cy', '10')
        circle.setAttribute('r', '9.5')
        circle.setAttribute('stroke', 'grey')
        circle.setAttribute('stroke-width', '1')
        circle.setAttribute('fill', `${this.color}`)
    //change color event
        this.html.addEventListener('mousedown', () => {
            circle.setAttribute('fill', `${currentColor}`)
            if (document.querySelector('#reset-button').disabled && currentColor != null){
                document.querySelector('#reset-button').disabled = false
            }
            if (document.querySelector('#save-button').disabled && currentColor != null){
                document.querySelector('#save-button').disabled = false
            }
        })

        this.html.addEventListener('mouseover', () => {
            if (mouseIsDown){
                circle.setAttribute('fill', `${currentColor}`)
            }
        })

        svg.appendChild(circle)
        this.html.append(svg)
        this.html.className = `peg-div` 
    }
} 