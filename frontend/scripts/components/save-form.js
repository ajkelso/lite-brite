class SaveForm {

    constructor(pattern) {
        this.pattern = pattern
        this.html = document.createElement('div')
        this.html.id = "save-form"
        this.renderForm()
    }

    renderForm = () => {
        const canvasForm = document.createElement('form')

        const userLabel = document.createElement('label')
        userLabel.innerText = "Name: "

        const userInput = document.createElement('input')
        userInput.type = "text"
        userInput.id = "name"

        const titleLabel = document.createElement('label')
        titleLabel.innerText = "Drawing Title: "

        const titleInput = document.createElement('input')
        titleInput.type = "text"
        titleInput.id = "title"

        const submitButton = document.createElement('input')
        submitButton.type = "submit"
        submitButton.value = "Save Your Drawing!"

        canvasForm.append(userLabel, userInput, titleLabel, titleInput, submitButton)
        this.html.append(canvasForm)

        canvasForm.addEventListener('submit', this.handleSubmit)

        main.append(this.html)
    }

    handleSubmit = event => {
        event.preventDefault()
        const userName = event.target.name.value
        const drawingTitle = event.target.title.value
        const pattern = Array.from(document.querySelectorAll('.peg')).map( peg => {
            return peg.getAttribute('fill')
        })
        
        
    }
}