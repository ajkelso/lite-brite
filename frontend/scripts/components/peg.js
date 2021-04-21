class Peg {
    constructor(color, canvas){
        this.color = color
        this.addToCanvas(canvas)
    }

    addToCanvas = (canvas) => {
        let div = document.createElement('div')
        div.className = `peg-div`
        div.style.backgroundColor = `${this.color}`
        div.addEventListener('mousedown', () => {
            if (currentColor){
                console.log(div)
                div.style.backgroundColor = `${currentColor}`
                pop.play()
            }
            if (document.querySelector('#reset-button').disabled && currentColor != null){
                document.querySelector('#reset-button').disabled = false
            }
            if (document.querySelector('#save-button').disabled && currentColor != null){
                document.querySelector('#save-button').disabled = false
            }
        })
        
        div.addEventListener('mouseover', () => {
            if (mouseIsDown){
                div.style.backgroundColor = `${currentColor}`
                pop.play()
                if (document.querySelector('#reset-button').disabled && currentColor != null){
                    document.querySelector('#reset-button').disabled = false
                }
                if (document.querySelector('#save-button').disabled && currentColor != null){
                    document.querySelector('#save-button').disabled = false
                }
            }
        })
        this.html = div
    }

} 