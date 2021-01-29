class Control {

    constructor() {
        this.colorSelectors = []
        this.createColors()

    }
    
    createColors = () => {
        let colors = ["Red", "Yellow", "Blue", "Green", "Purple"]
        colors.forEach(color => this.colorSelectors.push(new Color(color)))
    }

    
}