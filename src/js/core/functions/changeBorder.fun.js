/**
 * imports the files helpers from folder helpers and folder functions 
 */
import { clickElements } from "../events/click.event.js";
import { focusElement } from "../events/focus.event.js";
import { blurElement } from "../events/blur.event.js";
import { hasClass } from "../attributes/class/has.att.js";
import { addClass } from "../attributes/class/add.att.js";
import { removeClass } from "../attributes/class/remove.att.js";

let showElement;

const changeBorderColorElement = (element, elementCanvas) => element.addEventListener("input", () => {
    elementCanvas.style.borderColor = element.value
    element.parentElement.style.backgroundColor = element.value
})

/**
 * change border width element for click the buttons increase and decrease
 */
const borderElement = (element, show) => {
    showElement = show;
    focusElement({ element: element, fun: showElementBorder })
}

let canvas;
let value;
// let check;

/**
 * change border width element for click the buttons increase and decrease
 */
const changeBorderElement = (elements, canvasElement) => {

    canvas = canvasElement;

    clickElements({ elements: elements, fun: changeBorderRadius })

    console.log(canvas)

}

/**
 * change border width of the element when keyup input 
 */
const keyupChangeBorder = (input, canvasElement) => {

    if (input.value >= parseInt(input.max))
        input.value = parseInt(input.max);

    if (input.value <= parseInt(input.min))
        input.value = parseInt(input.min);

    canvasElement.style.borderWidth = input.value + "px";
}



/**
 * change border radius of the element when keyup input 
 */
const changeBorderStyleElement = (elements, canvasElement) => {

    canvas = canvasElement

    clickElements({ elements: elements, fun: changeBorderStyle })

}

/**
 * show div setting border for click button 
 */
function showElementBorder() {
    if (hasClass({ element: showElement, nameClass: "active" }))
        return;
        
    let focus = document.querySelector(".active")

    if (focus instanceof Element)
        removeClass({ el: focus, nameClass: "active" });

    addClass({ el: showElement, nameClass: "active" });
}

/**
 * check value for input for change value 
 * and update target element border width
 */
function changeBorderRadius() {

    value = parseInt(this.parentElement.children[1].value);

    if (value >= this.parentElement.children[1].max && this.id === "increase-border")
        return;

    if (value <= this.parentElement.children[1].min && this.id === "decrease-border")
        return;

    if (this.id === "decrease-border")
        value -= 1;

    else
        value += 1;

    this.parentElement.children[1].value = value;
    canvas.style.borderWidth = value + "px";

}

/**
 * check type style border  for change type 
 * and update target element border style
 */
function changeBorderStyle() {

    console.log(this.name);

    canvas.style.borderStyle = this.name;


}


export {
    borderElement,
    changeBorderElement,
    keyupChangeBorder,
    changeBorderColorElement,
    changeBorderStyleElement
}
