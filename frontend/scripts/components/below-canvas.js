class BelowCanvas {
    constructor() {
        this.buttons = document.createElement('div')
        this.createSave()
        this.createReset()
        belowCanvas.append(this.buttons)
        this.drawingList = new DrawingList
        belowCanvas.append(this.drawingList.html)
    }

    createSave = () => {
        this.save = document.createElement('button')
        this.save.id = 'save-button'
        this.save.innerHTML = 'Save Drawing'
        this.save.addEventListener('click', function (e) {
            new SaveForm
        })
        this.save.disabled = true
        this.buttons.append(this.save)
    }

    createReset = () => {
        this.reset = document.createElement('button')
        this.reset.id = 'reset-button'
        this.reset.innerHTML = 'Reset Canvas'
        this.reset.addEventListener('click', function (e) {
            document.querySelectorAll('.peg').forEach(peg => peg.setAttribute('fill', 'black'))
            this.disabled = true
            document.querySelector('#save-button').disabled = true
        })
        this.reset.disabled = true
        this.buttons.append(this.reset)
    }
}