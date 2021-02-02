class Canvas {
    
    static untouchedCanvas = () => {
        let pattern = []
        for (let i = 0; i < 800; i++) {
            pattern.push("black")
        }
        return pattern
    }
    
    constructor(drawing = {pattern: Canvas.untouchedCanvas()}) {
        canvas.innerHTML =""
        this.pattern = drawing.pattern 
        // this.createCanvas()
        this.createPegs()
        this.createRows()
        // this.createSave()
        // this.createReset()
    }

    createPegs = () => {
        this.pegs = this.pattern.map( color => {
            return new Peg(color, this.canvas)
        })
    }

    createRows = () => {

        let rows = []
        for (let i = 0; i < this.pegs.length / 10; i++) {
            let row = this.pegs.slice((10 * i), ((10 * i) + 10))
            rows.push(row)
        }
        
        let div = document.createElement('div')
        this.pegs.forEach(peg => div.append(peg.html))
        div.className = "row"
        canvas.append(div)
    }

    // createSave = () => {
    //     let div = document.createElement('div')
    //     this.save = document.createElement('button')
    //     this.save.id = 'save-button'
    //     this.save.innerHTML = 'Save Drawing'
    //     this.save.addEventListener('click', function (e) {
    //         new SaveForm
    //     })
    //     this.save.disabled = true
    //     div.append(this.save)
    //     belowCanvas.append(div)
    // }

    // createReset = () => {
    //     let div = document.createElement('div')
    //     this.reset = document.createElement('button')
    //     this.reset.id = 'reset-button'
    //     this.reset.innerHTML = 'Reset Canvas'
    //     this.reset.addEventListener('click', function (e) {
    //         document.querySelectorAll('.peg').forEach(peg => peg.setAttribute('fill', 'black'))
    //         this.disabled = true
    //         saveButton.disabled = true
    //     })
    //     this.reset.disabled = true
    //     div.append(this.reset)
    //     belowCanvas.append(div)
    // }

    // createCanvas = () => {
    //     let canvas = document.querySelector('#canvas')
    //     if (canvas){
    //         canvas.remove()
    //     }
    //     this.canvas = document.createElement('div')
    //     this.canvas.id = "canvas"
    //     main.append(this.canvas)
    // }
}
