class SideBar {
    constructor(drawing) {
        this.drawing = drawing
        this.createButtons()
        this.createDrawingList()
    }

    createButtons = () => {
        if (!!this.drawing.id){
            this.createUpdateBTN()
            this.createResetBTN()
            this.createDeleteBTN()
            this.createNewDrawingBTN()
        } else {
            this.createSaveBTN()
            this.createResetBTN()
        }
    }

    createDrawingList = () => {
        this.drawingList = new DrawingList
        sidebar.append(this.drawingList.html)
    }

    // Buttons:

    createUpdateBTN = () => {
        let div = document.createElement('div')
        this.update = document.createElement('button')
        this.update.id = 'save-button'
        this.update.classList.add("sidebar-button")
        this.update.innerHTML = 'Update Drawing'
        this.update.addEventListener('click', (e) => new UpdateForm(this.drawing))
        this.update.disabled = true
        div.append(this.update)
        sidebar.append(div)
    }

    createSaveBTN = () => {
        let div = document.createElement('div')
        this.save = document.createElement('button')
        this.save.id = 'save-button'
        this.save.classList.add("sidebar-button")
        this.save.innerHTML = 'Save Drawing'
        this.save.addEventListener('click', (e) => new SaveForm)
        this.save.disabled = true
        div.append(this.save)
        sidebar.append(div)
    }

    createResetBTN = () => {
        let div = document.createElement('div')
        this.reset = document.createElement('button')
        this.reset.id = 'reset-button'
        this.reset.classList.add("sidebar-button")
        this.reset.innerHTML = 'Reset'
        this.reset.addEventListener('click', this.handleReset)
        this.reset.disabled = true
        div.append(this.reset)
        sidebar.append(div)
    }


    createNewDrawingBTN = () => {
        let div = document.createElement('div')
        this.newDrawing = document.createElement('button')
        this.newDrawing.id = 'new-drawing-button'
        this.newDrawing.classList.add("sidebar-button")
        this.newDrawing.innerHTML = 'New Drawing'
        this.newDrawing.addEventListener('click', (e) => new Canvas)
        div.append(this.newDrawing)
        sidebar.append(div)
    }


    createDeleteBTN = () => {
        let div = document.createElement('div')
        this.delete = document.createElement('button')
        this.delete.id = 'delete-drawing-button'
        this.delete.classList.add("sidebar-button")
        this.delete.innerHTML = 'Delete Drawing'
        this.delete.addEventListener('click', (e) => this.handleDelete())
        div.append(this.delete)
        sidebar.append(div)
    }

    //event handlers

    handleReset = () => {
        let pegs = document.querySelectorAll('.peg-div')
        if (this.drawing.id){
            for (let i = 0; i < this.drawing.pattern.length; i++) {
                pegs[i].style.backgroundColor = `${this.drawing.pattern[i]}`
            }
        } else {
            pegs.forEach(peg => peg.style.backgroundColor = "black")
        }
        this.reset.disabled = true
        document.querySelector('#save-button').disabled = true
    }

    handleDelete = () => {
        api.deleteDrawing(this.drawing.id)
        .then(json => {
            alert(`"${json.title}" was successfully deleted.`)
        })
        new Canvas
    }
}