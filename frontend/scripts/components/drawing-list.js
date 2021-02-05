class DrawingList {

    constructor() {
        this.html = document.createElement('div')
        this.id = 'drawing-list'
        let h3 = document.createElement('h3')
        h3.innerText = "Saved Drawings"
        this.html.append(h3)
        this.renderUserList()
    }
    
    renderUserList = () => {
        const ul = document.createElement('ul')
        ul.id = 'drawings-list'
        api.getUsers().then(users => {
            users.forEach(user => {
                if (user.drawings.length){
                    let userLi = document.createElement('li')
                    userLi.className = "user"
                    userLi.innerText = "Artist: " + user.name 
                    let drawingUl = document.createElement('ul')
                    user.drawings.forEach(drawing => {
                        drawing.user_name = user.name
                        let drawingLi = document.createElement('li')
                        let drawingA = document.createElement('a')
                        drawingA.className = ('drawing-link')
                        drawingA.href = 'javascript:void(0)'
                        drawingA.innerText = drawing.title
                        drawingA.addEventListener('click', function (e) {
                            document.querySelector('#save-button').disabled = true
                            document.querySelector('#reset-button').disabled = false
                            new Canvas(drawing)
                        })
                        drawingLi.append(drawingA)
                        drawingUl.append(drawingLi)
                    })
                    userLi.append(drawingUl)
                    ul.append(userLi)
                }
            })
        })
        this.html.append(ul)
    }
}
//Code to render a list that only shows drawing titles w/o user

// renderList = () => {
//     const ul = document.createElement('ul')
//     ul.id = 'drawings-list'
//     api.getDrawings().then(drawings => {
//         drawings.forEach(drawing => {
//             let li = document.createElement('li')
//             let link = document.createElement('a')
//             link.classList.add("drawing-link")
//             link.href = 'javascript:void(0)'
//             link.innerText = drawing.title
//             link.addEventListener('click', function (e) {
//                 document.querySelector('#save-button').disabled = true
//                 document.querySelector('#reset-button').disabled = false
//                 new Canvas(drawing)
//             })
//             li.append(link)
//             ul.append(li)
//         });
//     })
//     this.html.append(ul)
// }