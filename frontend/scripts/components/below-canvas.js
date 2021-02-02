class BelowCanvas {
    constructor(drawing) {
        this.buttons = document.createElement('div')
        this.drawing = drawing

        if (!!drawing.id){
            this.createUpdateBTN()
            // this.createNewDrawingBTN()
        } else {
            this.createSaveBTN()
        }
        this.createResetBTN()


        // this.createSaveBTN()
        // this.createResetBTN()
        belowCanvas.append(this.buttons)
        this.drawingList = new DrawingList
        belowCanvas.append(this.drawingList.html)
    }

    createUpdateBTN = () => {
        this.update = document.createElement('button')
        this.update.id = 'save-button'
        this.update.innerHTML = 'Update Drawing'
        this.update.addEventListener('click', (e) => new UpdateForm(this.drawing))
        this.buttons.append(this.update)
    }

    createSaveBTN = () => {
        this.save = document.createElement('button')
        this.save.id = 'save-button'
        this.save.innerHTML = 'Save Drawing'
        this.save.addEventListener('click', (e) => new SaveForm)
        this.save.disabled = true
        this.buttons.append(this.save)
    }

    createResetBTN = () => {
        this.reset = document.createElement('button')
        this.reset.id = 'reset-button'
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
        this.buttons.append(this.reset)
    }
}