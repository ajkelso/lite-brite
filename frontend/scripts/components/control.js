class Control {

    constructor() {
        let colorSelectors = []
    }
    
    createColors = () => {
        let colors = ["Red", "Yellow", "Blue", "Green", "Purple"]
        colors.forEach(color => colorSelectors.push(new Color(color)))
    }
}