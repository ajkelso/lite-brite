class DrawingList {

    constructor() {
        this.html = document.createElement('div')
        this.id = 'drawing-list'
        this.renderList()
        main.append(this.html)
    }

    renderList = () => {
        const ul = document.createElement('ul')
        ul.id = 'drawings-list'
        api.getDrawings().then(drawings => {
            drawings.forEach(drawing => {
                let li = document.createElement('li')
                let link = document.createElement('a')
                link.href = 'javascript:void(0)'
                link.innerText = drawing.title
                link.addEventListener('click', function (e) {
                    new Canvas(drawing.pattern)
                })
                li.append(link)
                ul.append(li)
            });
        })
        this.html.append(ul)
    }
}