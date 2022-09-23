/**
 * imports the files helpers from folder helpers and folder functions 
 */

import { addClass } from "../attributes/class/add.att.js";
import { removeClass } from "../attributes/class/remove.att.js";
import { hasClass } from "../attributes/class/has.att.js";
import { clickElement } from "../events/click.event.js";
import { changeBackgroundElement, removeClassActive } from "./changeBackground.fun.js";
import { changeBorderRadiusElement, keyupChangeRadiusBorder } from "./changeBorderRadius.fun.js";
import { borderElement, changeBorderElement, keyupChangeBorder, changeBorderColorElement, changeBorderStyleElement } from "./changeBorder.fun.js";
import { horizontalShadow, verticalShadow, blurShadow, colorShadow, boxShadowElement, spreadShadow } from "./changeBoxShadow.fun.js";


/**
 * switch content html in tag header 
 * for click focus element tag html in canvas element
 */

const appHeader = document.getElementById("app-header");

let elementCanvas;
let haederElement;

function switchContentHeader(event) {

    elementCanvas = this;

    try {

        if (hasClass({ element: elementCanvas, nameClass: "focus" }))
            return

        addClass({ el: this, nameClass: "focus" })

        switch (this.getAttribute('name')) {
            case "canvas":
                settingsCanva_1();
                break
            default: return;
        }
    } catch (error) {
        throw error;
    }

}

function emptyContentHeader(event) {


    if (event.target !== this)
        return;

    let show = appHeader.querySelector(".active")

    if (show instanceof Element)
        removeClass({ el: show, nameClass: "active" })

    if (hasClass({ element: appHeader, nameClass: "event" }))
        return removeClass({ el: appHeader, nameClass: "event" });

    if (elementCanvas !== undefined)
        removeClass({ el: elementCanvas, nameClass: "focus" })

    console.log('empty content header received');

    appHeader.firstElementChild.innerHTML = "test test terst";

}

const classAdd = () => addClass({ el: appHeader, nameClass: "event" })

function settingsCanva_1() {

    appHeader.firstElementChild.innerHTML = contentHtmlAppHeader();

    borderElement(document.getElementById("border"), document.getElementById("show-border"));

    changeBorderElement([...appHeader.querySelectorAll(".number-btn-border")], elementCanvas);

    clickElement({ element: document.getElementById("border"), fun: classAdd });

    clickElement({ element: document.getElementById("primary_color"), fun: classAdd });

    changeBorderColorElement(document.getElementById("color-border"), elementCanvas);

    changeBackgroundElement(document.getElementById("primary_color"), elementCanvas);

    clickElement({ element: document.getElementById("label-color-border"), fun: removeClassActive });

    changeBorderRadiusElement([...appHeader.querySelectorAll(".number-btn")], elementCanvas);

    changeBorderStyleElement([...appHeader.querySelectorAll(".btn-style")], elementCanvas);

    document.getElementById("number-border").addEventListener("input", function () { keyupChangeBorder(this, elementCanvas) })

    document.getElementById("number").addEventListener("input", function () { keyupChangeRadiusBorder(this, elementCanvas) })

    horizontalShadow(document.getElementById("rangeHorizontal"), elementCanvas)

    verticalShadow(document.getElementById("rangeVertical"), elementCanvas)

    blurShadow(document.getElementById("rangeBlur"), elementCanvas)

    spreadShadow(document.getElementById("rangeSpread"), elementCanvas)

    colorShadow(document.getElementById("color-shadow"), elementCanvas)

    boxShadowElement(document.getElementById("box-shadow"), document.getElementById("show-box-shadow"))

    clickElement({ element: document.getElementById("box-shadow"), fun: classAdd });

}





/**
 * content html for tag app header
 */
const contentHtmlAppHeader = _ =>  /*html */
    `<div class="settings-background-colors background"> 
            <label for="primary_color" id="label-color-border" data-colors="background color">  
                <input type="color" id="primary_color" name="primary-color">
            </label>
    </div>
    <div class="">
        <div class="settings-border border">
            <button type="button" class="btn-border" id="border" name="border">
                <span><strong>Border</strong></span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                        d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 96H256V224H384V96zM384 288H256V416H384V288zM192 224V96H64V224H192zM64 416H192V288H64V416z" />
                    </svg>
                </span>
            </button>
            <div id="show-border" class="show-border">
                <div>
                    <div>
                        <div class="select">
                            <div>
                                 <h4> Select color Border</h4>
                                <div class="select-color "> 
                                    <label for="color-border" role="button" tabindex="-1">  
                                        <input type="color" id="color-border" name="color-border">
                                    </label>
                                </div>
                            </div>
                            <div>
                                <h4> Select width Border</h4>
                                <div class="select-width">
                                    <button type="button" id="decrease-border" class="number-btn-border" name="decrease-border" data-name="decrease border">
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M2 6a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 2 6Z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </span>
                                    </button>
                                    <input type="number" id="number-border" class="number-border" name="number-border" min="0" max="200" value="0" />
                                    <button type="button" id="increase-border" class="number-btn-border" name="increase-border" data-name="increase border ">
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M5.25 9.25a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h4> Select style Border</h4>
                                <div class="select-style">
                                    <div>
                                        <button type="button" class="btn-style" name="dashed" id="dashed" tabindex="-1">
                                            <span>Dashed</span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16">
                                                    <rect width="256" height="256" fill="none" />
                                                    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"
                                                        d="M35.25567 103.14925a95.55835 95.55835 0 0 1 24.86208-43.0315M60.10646 195.89357a95.55822 95.55822 0 0 1-24.83534-43.04694M152.85078 220.74432a95.55827 95.55827 0 0 1-49.69741-.01544M220.74433 152.85075a95.55835 95.55835 0 0 1-24.86208 43.0315M195.89354 60.10643a95.55822 95.55822 0 0 1 24.83534 43.04694M103.14922 35.25568a95.55827 95.55827 0 0 1 49.69741.01544" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn-style"  name="dotted" id="dotted" tabindex="-1">
                                            <span>Dotted</span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="16" height="16"
                                                    viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000"
                                                        stroke="none">
                                                        <path
                                                            d="M2430 4672 c-73 -24 -125 -59 -183 -121 -155 -166 -149 -420 14 -584 246 -246 659 -111 719 234 24 136 -26 275 -134 377 -84 78 -148 104 -271 109 -68 2 -104 -1 -145 -15z" />
                                                        <path
                                                            d="M1225 4173 c-121 -44 -205 -118 -258 -231 -30 -63 -32 -74 -32 -177 0 -106 2 -113 34 -180 134 -271 485 -327 690 -110 201 212 140 546 -123 675 -62 31 -80 35 -165 37 -73 3 -108 -1 -146 -14z" />
                                                        <path
                                                            d="M3633 4172 c-306 -109 -390 -491 -157 -712 211 -200 546 -138 675 125 32 66 34 75 34 180 0 103 -2 114 -32 177 -44 93 -109 160 -201 205 -68 34 -83 38 -171 40 -74 3 -108 -1 -148 -15z" />
                                                        <path
                                                            d="M776 2979 c-102 -17 -219 -95 -282 -189 -82 -122 -84 -336 -4 -455 155 -233 468 -268 663 -74 243 243 112 655 -227 718 -66 12 -79 12 -150 0z" />
                                                        <path
                                                            d="M4180 2976 c-173 -37 -302 -173 -333 -350 -22 -132 22 -266 120 -365 166 -165 420 -169 588 -10 92 87 135 185 135 309 0 123 -43 222 -133 308 -65 61 -119 89 -206 108 -78 16 -98 16 -171 0z" />
                                                        <path
                                                            d="M1240 1764 c-116 -31 -214 -115 -271 -229 -32 -66 -34 -75 -34 -180 0 -103 2 -114 32 -177 44 -94 109 -160 202 -206 73 -36 78 -37 186 -37 106 0 113 2 180 34 264 130 325 463 124 676 -108 114 -268 159 -419 119z" />
                                                        <path
                                                            d="M3661 1765 c-79 -23 -145 -62 -200 -120 -201 -213 -140 -546 124 -676 67 -32 74 -34 180 -34 108 0 113 1 186 37 145 72 230 200 237 359 5 106 -12 171 -67 256 -45 70 -125 135 -203 165 -70 27 -187 32 -257 13z" />
                                                        <path
                                                            d="M2453 1265 c-81 -22 -132 -52 -193 -114 -164 -164 -168 -418 -9 -586 95 -100 196 -141 333 -133 114 7 182 36 262 110 177 166 187 423 24 601 -104 114 -268 162 -417 122z" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn-style"  name="solid" id="solid" tabindex="-1">
                                            <span>Solid</span>
                                            <span>
                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                                        <path d="M2330 5110 c-474 -43 -923 -219 -1330 -524 -122 -91 -375 -344 -466 -466 -263 -351 -424 -717 -494 -1120 -124 -711 47 -1402 494 -2000 91 -122 344 -375 466 -466 598 -447 1289 -618 2000 -494 403 70 769 231 1120 494 122 91 375 344 466 466 447 598 618 1289 494 2000 -70 403 -231 769 -494 1120 -91 122 -344 375 -466 466 -535 401 -1151 581 -1790 524z m435 -300 c583 -54 1146 -347 1517 -790 715 -853 715 -2067 0 -2920 -371 -443 -934 -736 -1517 -790 -598 -55 -1196 135 -1665 528 -498 417 -800 1067 -800 1722 0 676 320 1341 847 1761 459 366 1041 542 1618 489z" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn-style"  name="none" id="none" tabindex="-1">
                                            <span>None</span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
                                                    <path
                                                        d="M64 448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416C49.67 416 64 430.3 64 448zM128 480C110.3 480 96 465.7 96 448C96 430.3 110.3 416 128 416C145.7 416 160 430.3 160 448C160 465.7 145.7 480 128 480zM128 96C110.3 96 96 81.67 96 64C96 46.33 110.3 32 128 32C145.7 32 160 46.33 160 64C160 81.67 145.7 96 128 96zM160 256C160 273.7 145.7 288 128 288C110.3 288 96 273.7 96 256C96 238.3 110.3 224 128 224C145.7 224 160 238.3 160 256zM320 480C302.3 480 288 465.7 288 448C288 430.3 302.3 416 320 416C337.7 416 352 430.3 352 448C352 465.7 337.7 480 320 480zM352 64C352 81.67 337.7 96 320 96C302.3 96 288 81.67 288 64C288 46.33 302.3 32 320 32C337.7 32 352 46.33 352 64zM320 288C302.3 288 288 273.7 288 256C288 238.3 302.3 224 320 224C337.7 224 352 238.3 352 256C352 273.7 337.7 288 320 288zM256 448C256 465.7 241.7 480 224 480C206.3 480 192 465.7 192 448C192 430.3 206.3 416 224 416C241.7 416 256 430.3 256 448zM224 96C206.3 96 192 81.67 192 64C192 46.33 206.3 32 224 32C241.7 32 256 46.33 256 64C256 81.67 241.7 96 224 96zM256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256zM416 480C398.3 480 384 465.7 384 448C384 430.3 398.3 416 416 416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480zM416 96C398.3 96 384 81.67 384 64C384 46.33 398.3 32 416 32C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96zM64 64C64 81.67 49.67 96 32 96C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64zM416 288C398.3 288 384 273.7 384 256C384 238.3 398.3 224 416 224C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288zM64 256C64 273.7 49.67 288 32 288C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224C49.67 224 64 238.3 64 256zM224 384C206.3 384 192 369.7 192 352C192 334.3 206.3 320 224 320C241.7 320 256 334.3 256 352C256 369.7 241.7 384 224 384zM448 352C448 369.7 433.7 384 416 384C398.3 384 384 369.7 384 352C384 334.3 398.3 320 416 320C433.7 320 448 334.3 448 352zM32 384C14.33 384 0 369.7 0 352C0 334.3 14.33 320 32 320C49.67 320 64 334.3 64 352C64 369.7 49.67 384 32 384zM448 160C448 177.7 433.7 192 416 192C398.3 192 384 177.7 384 160C384 142.3 398.3 128 416 128C433.7 128 448 142.3 448 160zM32 192C14.33 192 0 177.7 0 160C0 142.3 14.33 128 32 128C49.67 128 64 142.3 64 160C64 177.7 49.67 192 32 192zM256 160C256 177.7 241.7 192 224 192C206.3 192 192 177.7 192 160C192 142.3 206.3 128 224 128C241.7 128 256 142.3 256 160z" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
    <div class="">
        <div class="settings-box-shadow box-shadow">
            <button type="button" class="btn-box-shadow" id="box-shadow" name="box-shadow">
                <span><strong>Box Shadow</strong></span>
                <span>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"  viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M0 2880 l0 -2240 320 0 320 0 0 -320 0 -320 2240 0 2240 0 0 2240 0 2240 -320 0 -320 0 0 320 0 320 -2240 0 -2240 0 0 -2240z m4160 0 l0 -1920 -1920 0 -1920 0 0 1920 0 1920 1920 0 1920 0 0 -1920z" />
                        </g>
                    </svg>
                </span>
            </button>
            <div id="show-box-shadow" class="show-box-shadow">
                <div>
                    <div>
                        <div class="select">
                            <div>
                                <h4>Shadow Color</h4>
                                <div class="select-color">
                                    <label for="color-shadow" role="button" tabindex="-1">
                                        <input type="color" id="color-shadow" name="color-border">
                                    </label>
                                </div>
                            </div>
                            <div>
                                <h4>Horizontal Shadow Length</h4>
                                <div class="select-shadow">
                                    <div>
                                        <input type="range" value="0" min="-100" max="100" id="rangeHorizontal" name="rangeHorizontal"/>
                                        <input type="number" id="rangevalueHorizontal" value="0" name="rangevalueHorizontal"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4>Vertical Shadow Length</h4>
                                <div class="select-shadow">
                                    <div>
                                        <input type="range" value="0" min="-100" max="100" id="rangeVertical" name="rangeVertical"/>
                                        <input type="number" id="rangevalueVertical" value="0" name="rangevalueVertical"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4>Blur Radius</h4>
                                <div class="select-shadow">
                                    <div>
                                        <input type="range" value="0" min="-100" max="100" id="rangeBlur" name="rangeBlur"/>
                                        <input type="number" id="rangevalueBlur" value="0" name="rangevalueBlur"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4>Spread Radius</h4>
                                <div class="select-shadow">
                                    <div>
                                        <input type="range" value="0" min="-100" max="100" id="rangeSpread" name="rangeSpread"/>
                                        <input type="number" id="rangevalueSpread" value="0" name="rangevalueSpread"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="settings-border-radius border-radius">
        <div class="border-radius">
            <button type="button" id="decrease" class="number  number-btn" name="decrease" data-name="decrease border radius">
                <span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 2 6Z" fill="currentColor"></path></svg>
                </span>
            </button>
            <input type="number" id="number" class="number" name="number" min="0" max="200" value="0"/>
            <button type="button" id="increase" class="number number-btn" name="increase"  data-name="increase borader radius" >
                <span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 9.25a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5Z" fill="currentColor"></path></svg>
                </span>
            </button>
        </div>
    </div>
`;



export {
    switchContentHeader,
    emptyContentHeader,
}