/**
 * imports the files helpers from folder helpers and folder functions 
 */
 import { removeClass } from "../attributes/class/remove.att.js";
 
 
 /**
 * change background element 
 */

const changeBackgroundElement = (element, elementCanvas) => element.addEventListener("input", () => {

    let focus = document.querySelector(".active")

    if (focus instanceof Element)
        removeClass({ el: focus, nameClass: "active" });

    elementCanvas.style.backgroundColor = element.value
    element.parentElement.style.backgroundColor = element.value
})

/**
 * remove class active in element 
 */


const removeClassActive = () => document.querySelector(".active") instanceof Element ? removeClass({ el: document.querySelector(".active"), nameClass: "active" }) : null ;

export {
    changeBackgroundElement,
    removeClassActive
}