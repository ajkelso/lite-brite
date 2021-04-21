class Canvas {

    constructor(drawing = {pattern: Canvas.untouchedCanvas()}) {
        resetSelectors()
        canvas.innerHTML =""
        this.pattern = drawing.pattern 
        this.userID = drawing.user_id
        this.drawingID = drawing.id
        this.createPegs()
        this.createRows()
        this.createSideBar(drawing)
    }

    static untouchedCanvas = () => {
        let pattern = []
        for (let i = 0; i < 1200; i++) {
            pattern.push("black")
        }
        return pattern
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
}
