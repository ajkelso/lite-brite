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

        const user = document.createElement('p')
        user.innerText = `Artist: ${this.userName}`

        const titleLabel = document.createElement('label')
        titleLabel.innerText = "Drawing Title: "

        this.titleInput = document.createElement('input')
        this.titleInput.type = "text"
        this.titleInput.id = "title"
        this.titleInput.value = this.drawingTitle

        const submitButton = document.createElement('input')
        submitButton.type = "submit"
        submitButton.value = "Update Drawing!"

        canvasForm.append(user, titleLabel, this.titleInput, submitButton)
        this.html.append(canvasForm)

        canvasForm.addEventListener('submit', this.handleSubmit)

        main.append(this.html)
    }

    handleSubmit = event => {
        event.preventDefault()
        const drawingTitle = this.titleInput.value
        const pattern = Array.from(document.querySelectorAll('.peg')).map( peg => {
            return peg.getAttribute('fill')
        })

        api.updateDrawing(this.drawingID, {
            drawing: {
                title: drawingTitle,
                pattern: pattern,
            }
        }).then(json => new Canvas(json))
        event.target.remove()
        // document.querySelector('#save-button').style.display = ""
        // document.querySelector('#save-button').disabled = true
        // document.querySelector('#reset-button').disabled = false
        // let li = document.createElement('li')
        // let link = document.createElement('a')
        // link.href = 'javascript:void(0)'
        // link.innerText = drawingTitle
        // li.append(link)
        // document.querySelector('#drawings-list').append(li)
    }
}