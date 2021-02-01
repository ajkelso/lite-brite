class Canvas {
    
    static untouchedCanvas = () => {
        let layout = []
        for (let i = 0; i < 80; i++) {
            layout.push("black")
        }
        return layout
    }
    
    constructor(layout = Canvas.untouchedCanvas()) {
        canvas.innerHTML =""
        this.pegs = [];
        this.layout = layout
        // this.createCanvas()
        this.createPegs(this.layout)
        this.createRows()
        this.createSave()
        this.createReset()
    }

    createPegs = (layout) => {
        for (let i = 0; i < 1000; i++) {
            let peg = new Peg(layout[i], this.canvas)
            peg.html.id = i + 1
            this.pegs.push(peg) 
        }
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

    createSave = () => {
        this.save = document.createElement('button')
        this.save.id = 'save-button'
        this.save.innerHTML = 'Save Drawing'
        this.save.addEventListener('click', function (e) {
            new SaveForm
        })
        this.save.disabled = true
        main.append(this.save)
    }

    createReset = () => {
        this.reset = document.createElement('button')
        this.reset.id = 'reset-button'
        this.reset.innerHTML = 'Reset Canvas'
        this.reset.addEventListener('click', function (e) {
            pegs.forEach(peg => peg.setAttribute('fill', 'black'))
            this.disabled = true
            saveButton.disabled = true
        })
        this.reset.disabled = true
        main.append(this.reset)
    }

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
