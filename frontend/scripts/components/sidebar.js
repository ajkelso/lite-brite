class SideBar {
    constructor(drawing) {
        // sidebar = document.createElement('div')
        // sidebar.classList.add('canvas-view')
        this.drawing = drawing

        if (!!drawing.id){
            this.createUpdateBTN()
            this.createResetBTN()
            this.createNewDrawingBTN()
        } else {
            this.createSaveBTN()
            this.createResetBTN()
        }
        this.drawingList = new DrawingList
        sidebar.append(this.drawingList.html)
    }

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
        this.reset.innerHTML = 'Reset Canvas'
        let pattern = this.drawing.pattern
        this.reset.addEventListener('click', function (e) {
            if (document.querySelector('.rows').getAttribute('drawing-id') !== "undefined"){
                let pegs = document.querySelectorAll('.peg')
                for (let i = 0; i < pattern.length; i++) {
                    pegs[i].setAttribute('fill', pattern[i])
                }
            } else {
                document.querySelectorAll('.peg').forEach(peg => peg.setAttribute('fill', 'black'))
            }
            this.disabled = true
            document.querySelector('#save-button').disabled = true
        })
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
}