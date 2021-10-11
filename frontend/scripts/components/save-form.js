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

        const userLabel = document.createElement('label')
        userLabel.innerText = "Artist's Name: "

        this.userInput = document.createElement('input')
        this.userInput.type = "text"
        this.userInput.id = "name"

        userDiv.append(userLabel, this.userInput)

        const titleDiv = document.createElement('div')
        titleDiv.className = "form-group"

        const titleLabel = document.createElement('label')
        titleLabel.innerText = "Drawing Title: "

        this.titleInput = document.createElement('input')
        this.titleInput.type = "text"
        this.titleInput.id = "title"

        titleDiv.append(titleLabel, this.titleInput)

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