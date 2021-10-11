class SaveForm {

    constructor() {
        document.querySelector('#save-button').style.display = "none"
        document.querySelector('#reset-button').disabled = true
        this.html = document.createElement('div')
        this.html.id = "save-form"
        this.renderForm()
    }

    renderForm = () => {
        const canvasForm = document.createElement('form')

        const userDiv = document.createElement('div')
        userDiv.className = "form-group"

        this.userInput = document.createElement('input')
        this.userInput.type = "text"
        this.userInput.id = "name"
        this.userInput.placeholder = "Artist's Name..."

        userDiv.append(this.userInput)

        const titleDiv = document.createElement('div')
        titleDiv.className = "form-group"

        this.titleInput = document.createElement('input')
        this.titleInput.type = "text"
        this.titleInput.id = "title"
        this.titleInput.placeholder = "Drawing Title..."


        titleDiv.append(this.titleInput)

        const submitButton = document.createElement('input')
        submitButton.type = "submit"
        submitButton.value = "Save Drawing!"

        canvasForm.append(userDiv, titleDiv, submitButton)
        this.html.append(canvasForm)

        canvasForm.addEventListener('submit', this.handleSubmit)

        canvas.append(this.html)
    }

    handleSubmit = event => {
        event.preventDefault()
        const userName = this.userInput.value
        const drawingTitle = this.titleInput.value
        const pattern = Array.from(document.querySelectorAll('.peg-div')).map( peg => {
            return peg.style.backgroundColor
        })

        api.postDrawing({
            drawing: {
                title: drawingTitle,
                pattern: pattern,
                user_attributes: {
                    name: userName,
                },
            }
        }).then(json => new Canvas(json))
        .catch(error => {
            alert("Cannot save drawing")
            new Canvas
        })
        event.target.remove()
    }
}