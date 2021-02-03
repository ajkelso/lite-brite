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
        this.userID = drawing.user_id
        this.drawingID = drawing.id
        
        // this.createCanvas()
        this.createPegs()
        this.createRows()
        this.createSideBar(drawing)
        // this.createSave()
        // this.createReset()
    }

    createPegs = () => {
        this.pegs = this.pattern.map( color => {
            return new Peg(color, this.canvas)
        })
    }

    createRows = () => {        
        let div = document.createElement('div')
        div.setAttribute("user-id", this.userID)
        div.setAttribute("drawing-id", this.drawingID)
        this.pegs.forEach(peg => div.append(peg.html))
        div.className = "rows"
        canvas.append(div)
    }

    createSideBar = (drawing) => {
        sidebar.innerHTML = ""
        this.sideBar = new SideBar(drawing)
    }

    // createSave = () => {
    //     this.save = document.createElement('button')
    //     this.save.id = 'save-button'
    //     this.save.innerHTML = 'Save Drawing'
    //     this.save.addEventListener('click', function (e) {
    //         new SaveForm
    //     })
    //     this.save.disabled = true
    //     this.buttons.append(this.save)
    // }

    // createReset = () => {
    //     this.reset = document.createElement('button')
    //     this.reset.id = 'reset-button'
    //     this.reset.innerHTML = 'Reset Canvas'
    //     this.reset.addEventListener('click', function (e) {
    //         document.querySelectorAll('.peg').forEach(peg => peg.setAttribute('fill', 'black'))
    //         this.disabled = true
    //         document.querySelector('#save-button').disabled = true
    //     })
    //     this.reset.disabled = true
    //     this.buttons.append(this.reset)
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
