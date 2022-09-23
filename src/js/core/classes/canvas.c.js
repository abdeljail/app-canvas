class Canvas {

    elements
    canvas
    currentResize
    resX
    resY

    constructor(canvas) {

        try {

            if (!(canvas instanceof Element))
                throw new Error('Invalid Element DOM  "' + canvas + '"');

            canvas = canvas;

        } catch (error) {
            throw error;
        }

    }


    mousemove(e) {
        alert('MouseMove: ');
        console.log(e)
        console.log(e.target)

    }
    check() {

        if (canvas.clientWidth <= 150)
            width = "151px";

        if (canvas.clientHeight <= 150)
            height = "151px";

    }

    mouseup() {

    }

    mouseDown(e) {

        const rect = canvas.getBoundingClientRect()

        if (e.target.classList.contains("left-b")) { }

        if (e.target.classList.contains("right-t")) { }

        if (e.target.classList.contains("right-b")) { }

        this.currentResize = e.target

        window.addEventListener("mousemove", () => {

            console.log(canvas)
            console.log(this.currentResize)

            // if (this.currentResize.classList.contains("res")) {
            canvas.style.width = e.clientX + "px";
            canvas.style.height = e.clientY + "px";
            // }

        })
        window.addEventListener("mouseup", function mousemove() {
            window.removeEventListener("mousemove", mousemove)
        })

    }

    loopElements() {

        this.elements = canvas.querySelectorAll('.res');

        this.elements.forEach(element => {
            element.addEventListener('mousedown', this.mouseDown)
            element.addEventListener('blur', this.check())
        })
    }

    // get elements() {
    //     return this.elements;
    // }
    // get canvas() {
    //     return canvas;
    // }
    // set currentResize(value) {
    //     this.currentResize = value;
    // }
    // set resX(value) {
    //     this.resX = value;
    // }
    // set resY(value) {
    //     this.resY = value;
    // }

}

export {
    Canvas,
}