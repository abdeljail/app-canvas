/**
 * imports the files helpers from folder helpers and folder functions 
 */
import { clickElements } from "../events/click.event.js";


let canvas;
let value;
// let check;

/**
 * change border radius element for click the buttons increase and decrease
 */
const changeBorderRadiusElement = (elements, canvasElement) => {

    canvas = canvasElement;

    clickElements({ elements: elements, fun: changeBorderRadius })

}

/**
 * change the border radius of the element when mousedown  the buttons increase and decrease
 * and active event click
 */


// function mousedownChangeRadiusBorder(elements, canvasElement) {

//     elements.forEach(btn => {
//         btn.addEventListener("mousedown", function (event) {
//             check = true;

//             test(this);
//         })
//     });
//     elements.forEach(btn => {
//         btn.addEventListener("mouseup", function (event) {
//             check = false
//             console.log("kkfkkff fkfkffkfk")
//         })
//     });

// }



/**
 * change border radius of the element when keyup input 
 */
function keyupChangeRadiusBorder(input, canvasElement) {

    if (input.value >= parseInt(input.max))
        input.value = parseInt(input.max);

    if (input.value <= parseInt(input.min))
        input.value = parseInt(input.min);

    canvasElement.style.borderRadius = input.value + "px";
}




export {
    changeBorderRadiusElement,
    keyupChangeRadiusBorder,
    // mousedownChangeRadiusBorder

}


/**
 * 
 */


function changeBorderRadius() {

    value = parseInt(this.parentElement.children[1].value);

    if (value >= this.parentElement.children[1].max && this.id === "increase")
        return;

    if (value <= this.parentElement.children[1].min && this.id === "decrease")
        return;

    if (this.id === "decrease")
        value -= 1;

    else
        value += 1;

    this.parentElement.children[1].value = value;
    canvas.style.borderRadius = value + "px";

}

// function test(btn) {

//     console.log(check);

//     // btn.click();

//     // console.log(check);

//     if (check === true) {
//         return test(btn)
//     }

// }