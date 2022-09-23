class DragDrop {

    #element1
    #element2
    #dragged
    constructor(element1, element2) {

        try {

            if (!(element1 instanceof Element))
                throw new Error('Invalid Element DOM  "' + element1 + '"');

            if (!(element1 instanceof Element))
                throw new Error('Invalid Element DOM  "' + element2 + '"');

            this.#element2 = element2;
            this.#element1 = element1;

        } catch (error) {
            throw error;
        }

    }

    startDrag(event) {
        this.#dragged =  event.target;
    }

    drop(event) {

        event.preventDefault();

        console.log(event.target)

        if (event.target.id === "canvas") {

            let conpy = this.#element1.firstElementChild.cloneNode(true);

            this.#element2.appendChild(conpy);

            conpy = ""

        }
    }

    dragOver = (event) => event.preventDefault()

    _drop() {
        this.#element2.addEventListener("drop", (event) => this.drop(event));
    }

    _dragOver() {
        this.#element2.addEventListener("dragover", (event) => this.dragOver(event));
    }
    _startDrag(){
        document.getElementById("div1").addEventListener("dragstart", (event)=> this.startDrag(event));
    }
    _start() {
        this._startDrag();
        this._drop();
        this._dragOver();
    }
}

export {
    DragDrop
}