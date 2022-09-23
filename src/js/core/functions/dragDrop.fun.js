
let dragged = null;

/**
 *  drag and drop element for add content in element canvas element
 */
const dragDropElement = (element, canvasElement) => {

    element.addEventListener("dragstart", startDrop);

    canvasElement.addEventListener("drop", drop);

    canvasElement.addEventListener("dragover", dragOver);
}

/**
 * click element for add content in element canvas
 */
const createElement = (element, canvasElement) => {

    element.addEventListener("dragstart", startDrop);

    canvasElement.addEventListener("drop", drop);

    canvasElement.addEventListener("dragover", dragOver);
}



function startDrop(event) {

    dragged = this;

}

function drop(event) {

    event.preventDefault();

    if (this.id === "canvas") {

        let compy = dragged.firstElementChild.cloneNode(true);

        console.log(compy);


        this.appendChild(compy);

        dragged.removeEventListener("event", startDrop);

    }
}

function dragOver(event) {

    event.preventDefault()

}


function createDOM() {

}


export {
    dragDropElement,
}