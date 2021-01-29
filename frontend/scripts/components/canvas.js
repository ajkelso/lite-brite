class Canvas {
    constructor(layout) {
        this.pegs = [];
        if (layout) {
            this.layout = layout
        }else{
            this.untouchedCanvas()
        }
        this.createCanvas()
        this.createPegs(this.layout)
        this.createRows()
    }

    untouchedCanvas = () => {
        this.layout = []
        for (let i = 0; i < 80; i++) {
            this.layout.push("black")
        }
    }

    createPegs = (layout) => {
        for (let i = 0; i < 80; i++) {
            let peg = new Peg(layout[i], this.canvas)
            peg.html.id = i + 1
            this.pegs.push(peg) 
        }
    }

    createRows = () => {
        let row1 = this.pegs.slice(0, 10)
        let row2 = this.pegs.slice(10, 20)
        let row3 = this.pegs.slice(20, 30)
        let row4 = this.pegs.slice(30, 40)
        let row5 = this.pegs.slice(40, 50)
        let row6 = this.pegs.slice(50, 60)
        let row7 = this.pegs.slice(60, 70)
        let row8 = this.pegs.slice(70)
        let rows = [row1, row2, row3, row4, row5, row6, row7, row8]
        for (let i = 0; i < rows.length; i++) {
            let div = document.createElement('div')
            div.id = `row-${i + 1}`
            div.className = 'row'
            for (let j = 0; j < rows[i].length; j++) {
                div.append(rows[i][j].html)
            }
            this.canvas.append(div)
        }
        
    }

    createCanvas = () => {
        let canvas = document.querySelector('#canvas')
        if (canvas){
            canvas.remove()
        }
        this.canvas = document.createElement('div')
        this.canvas.id = "canvas"
        main.append(this.canvas)
    }
}
