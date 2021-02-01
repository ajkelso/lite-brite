class DrawingList {

    constructor() {
        this.html = document.createElement('div')
        this.id = 'drawing-list'
        this.renderList()
        canvas.append(this.html)
    }

    renderList = () => {
        const ul = document.createElement('ul')
        api.getDrawings().then(drawings => {
            drawings.forEach(drawing => {
                let li = document.createElement('li')
                let link = document.createElement('a')
                link.innerText = drawing.title
                li.append(link)
                ul.append(li)
            });
        })
        this.html.append(ul)
    }
}