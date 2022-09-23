/**
 * imports the files helpers from folder helpers and folder functions 
 */

import { focusElement } from "../events/focus.event.js";
import { hasClass } from "../attributes/class/has.att.js";
import { addClass } from "../attributes/class/add.att.js";
import { removeClass } from "../attributes/class/remove.att.js";

let shadowElement;
let canvas;

let shadow = [0, 0, 0, 0, "rgba(0, 0, 0, 0.75)"]

/**
 * change box shadow width element 
 */
const boxShadowElement = (element, show) => {
    shadowElement = show;
    focusElement({ element: element, fun: showShadowElement })
}
/**
 * change Horizontal box Shadow for change value input range
 *  */
const horizontalShadow = (element, canvasElement) => {

    canvas = canvasElement;

    element.addEventListener('input', () => {
        element.nextElementSibling.value = element.value;
        shadow[0] = element.value + "px";
        canvasElement.style.boxShadow = "  " + shadow[0] + " " + shadow[1] + " " + shadow[2] + " " + shadow[3] + " " + shadow[4] + " "
    })

}
/**
 * change Vertical box Shadow for change value input range
 **/
const verticalShadow = (element, canvasElement) => {

    canvas = canvasElement;

    element.addEventListener('input', () => {
        element.nextElementSibling.value = element.value;
        shadow[1] = element.value + "px";
        canvasElement.style.boxShadow = "  " + shadow[0] + " " + shadow[1] + " " + shadow[2] + " " + shadow[3] + " " + shadow[4] + " "
    })

}
/**
 * change Vertical box Shadow for change value input range
 **/
const blurShadow = (element, canvasElement) => {

    canvas = canvasElement;

    element.addEventListener('input', () => {
        element.nextElementSibling.value = element.value;
        shadow[2] = element.value + "px";
        canvasElement.style.boxShadow = "  " + shadow[0] + " " + shadow[1] + " " + shadow[2] + " " + shadow[3] + " " + shadow[4] + " "
    })

}
/**
 * change Vertical box Shadow for change value input range
 *  */
const colorShadow = (element, canvasElement) => {

    canvas = canvasElement;

    element.addEventListener('input', () => {
        shadow[4] = element.value;
        element.parentElement.style.backgroundColor = element.value
        canvasElement.style.boxShadow = "  " + shadow[0] + " " + shadow[1] + " " + shadow[2] + " " + shadow[3] + " " + shadow[4] + " "
    })

}
/**
 * change Spread box Shadow for change value input range
 *  */
const spreadShadow = (element, canvasElement) => {

    canvas = canvasElement;

    element.addEventListener('input', () => {

        element.nextElementSibling.value = element.value;
        shadow[3] = element.value + "px";
        canvas.style.boxShadow = "  " + shadow[0] + " " + shadow[1] + " " + shadow[2] + " " + shadow[3] + " " + shadow[4] + " "
        
    })

}
/**
 * show div setting box shadow for click button 
 */
function showShadowElement() {
    if (hasClass({ element: shadowElement, nameClass: "active" }))
        return;
    let focus = document.querySelector(".active")
    if (focus instanceof Element)
        removeClass({ el: focus, nameClass: "active" });
    addClass({ el: shadowElement, nameClass: "active" });
}
export {
    horizontalShadow,
    verticalShadow,
    blurShadow,
    colorShadow,
    boxShadowElement,
    spreadShadow
}