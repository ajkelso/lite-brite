class UpdateForm {
    constructor(drawing) {
        document.querySelector('#save-button').style.display = "none"
        document.querySelector('#reset-button').disabled = true

        this.html = document.createElement('div')
        this.html.id = "update-form"
        this.drawingID = drawing.id
        this.drawingTitle = drawing.title
        this.userId = drawing.user_id
        this.userName = drawing.user_name
        this.renderForm()

        console.log(drawing)
    }

    renderForm = () => {
        const canvasForm = document.createElement('form')
    
        const user = document.createElement('input');
        user.value = `${this.userName}`;
        user.readOnly = true;
        user.disabled = true;

        this.titleInput = document.createElement('input')
        this.titleInput.type = "text"
        this.titleInput.id = "title"
        this.titleInput.value = this.drawingTitle

        const submitButton = document.createElement('input')
        submitButton.type = "submit"
        submitButton.value = "Update Drawing!"

        canvasForm.append(user, this.titleInput, submitButton)
        this.html.append(canvasForm)

        canvasForm.addEventListener('submit', this.handleSubmit)

        canvas.append(this.html)
    }

    handleSubmit = event => {
        event.preventDefault()
        const drawingTitle = this.titleInput.value
        const pattern = Array.from(document.querySelectorAll('.peg-div')).map( peg => {
            return peg.style.backgroundColor
        })

        api.updateDrawing(this.drawingID, {
            drawing: {
                title: drawingTitle,
                pattern: pattern,
            }
        }).then(json => new Canvas(json))
        .catch(error => {
            alert("Cannot update drawing")
            new Canvas
        })
        event.target.remove()
    }
}