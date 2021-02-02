class UpdateForm {
    constructor(drawing) {
        // document.querySelector('#save-button').style.display = "none"
        // document.querySelector('#reset-button').disabled = true

        // this.html = document.createElement('div')
        // this.html.id = "update-form"
        // this.renderForm()
        this.drawingID = drawing.id
        console.log(drawing)
    }
    



    renderForm = () => {
        const canvasForm = document.createElement('form')

        const userLabel = document.createElement('label')
        userLabel.innerText = "Name: "

        this.userInput = document.createElement('input')
        this.userInput.type = "text"
        this.userInput.id = "name"

        const titleLabel = document.createElement('label')
        titleLabel.innerText = "Drawing Title: "

        this.titleInput = document.createElement('input')
        this.titleInput.type = "text"
        this.titleInput.id = "title"

        const submitButton = document.createElement('input')
        submitButton.type = "submit"
        submitButton.value = "Save Drawing!"

        canvasForm.append(userLabel, this.userInput, titleLabel, this.titleInput, submitButton)
        this.html.append(canvasForm)

        canvasForm.addEventListener('submit', this.handleSubmit)

        main.append(this.html)
    }

    handleSubmit = event => {
        event.preventDefault()
        const userName = this.userInput.value
        const drawingTitle = this.titleInput.value
        const pattern = Array.from(document.querySelectorAll('.peg')).map( peg => {
            return peg.getAttribute('fill')
        })

        api.postDrawing({
            drawing: {
                title: drawingTitle,
                pattern: pattern,
                user_attributes: {
                    name: userName,
                },
            }
        }).then(console.log)
        event.target.remove()
        document.querySelector('#save-button').style.display = ""
        document.querySelector('#save-button').disabled = true
        document.querySelector('#reset-button').disabled = false
        let li = document.createElement('li')
        let link = document.createElement('a')
        link.href = 'javascript:void(0)'
        link.innerText = drawingTitle
        li.append(link)
        debugger
        document.querySelector('#drawings-list').append(li)
    }
}