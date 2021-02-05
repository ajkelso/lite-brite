class APIAdapter {

    
    constructor(port = 3000) {
        this.port = port
        this.url = `http://localhost:${port}`
    }
    //helpers
    
    parseJSON = res => res.json()
    headers = {"Accepts":"application/json", "Content-Type": "application/json"}
    
    get usersURL() {
        return this.url + "/users"
    }

    get drawingsURL() {
        return this.url + "/drawings"
    }

    getUsers = () => fetch(this.usersURL).then(this.parseJSON)
    getUser = (userId) => fetch(this.userURL + `/${userId}`).then(this.parseJSON)

    getDrawings = () => fetch(this.drawingsURL).then(this.parseJSON)
    getDrawing = (drawingId) => fetch(this.drawingsURL + `/${drawingId}`).then(this.parseJSON)

    postUser = body => fetch(this.usersURL, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body)
    }).then(this.parseJSON)

    postDrawing = body => fetch(this.drawingsURL, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body)
    }).then(this.parseJSON)

    updateDrawing = (drawingId, body) => fetch(this.drawingsURL + `/${drawingId}`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(body)
    }).then(this.parseJSON)

    deleteDrawing = (drawingId) => fetch(this.drawingsURL + `/${drawingId}`, {
        method: 'DELETE',
        headers: this.headers,
        body: JSON.stringify(drawingId)
    }).then(this.parseJSON)
}