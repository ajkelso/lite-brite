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
        circle.classList.add('peg')
        circle.setAttribute('cx', '15')
        circle.setAttribute('cy', '15')
        circle.setAttribute('r', '14.5')
        circle.setAttribute('stroke', 'black')
        circle.setAttribute('stroke-width', '1')
        circle.setAttribute('fill', `${this.color}`)
    //change color event
        circle.addEventListener('mousedown', () => {
            circle.setAttribute('fill', `${currentColor}`)
            if (resetButton.disabled && currentColor != null){
                resetButton.disabled = false
            }
            if (saveButton.disabled && currentColor != null){
                saveButton.disabled = false
            }
        })

        circle.addEventListener('mouseover', () => {
            if (mouseIsDown){
                circle.setAttribute('fill', `${currentColor}`)
            }
        })

        svg.appendChild(circle)
        this.html.append(svg)
        this.html.className = `peg-div` 
    }
} 