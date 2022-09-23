import "../../assets/css/style.css";
import logo from '../../assets/images/logo.jpg';

// /**
//  * imports files from 
//  */
import { addClass } from "../core/attributes/class/add.att.js";
import { hasClass, hasClasses } from "../core/attributes/class/has.att.js";
import { removeClass } from "../core/attributes/class/remove.att.js";
import { clickElement, clickElements } from "../core/events/click.event.js";
import { focusElement } from "../core/events/focus.event.js";
import { fetchDataString } from "../core/apis/get/fetch.string.js";
import { postTemplete } from "../core/apis/post/post.templete.js";
import { string, file } from "../helpers/inputs/inputs.text.js";
import { createElementTag } from "../core/classes/ceateElement.c.js";
import { switchContentHeader, emptyContentHeader } from "../core/functions/switchContentHeader.fun.js"
import { dragDropElement } from "../core/functions/dragDrop.fun.js";
import { notFound } from "../core/components/notFound/notFound.f.js";


/**
 * create varaibles globals
 */
const URL_APP = "http://localhost:3000/canvas/apis/"

const app = document.getElementById("app");

const btnsAside = [...document.getElementsByClassName("btn-aside")];

const showContentTagName = document.getElementById("show-content-tag-name");

const responseContentData = document.getElementById("response-data");

const hideContentTagName = document.getElementById("hide-content-tag-name");

const headerShowContentTagName = document.getElementById("haeder-content-show-tag-name");

const contentHeader = headerShowContentTagName.querySelector("h3");

const inputSreach = headerShowContentTagName.querySelector("input");

const searchBtn = headerShowContentTagName.querySelector("#search-btn");

const closeBtn = headerShowContentTagName.querySelector("#close-btn");

const createElement = responseContentData.firstElementChild.firstElementChild.firstElementChild;

const canvas = document.getElementById("canvas");

const contantMain = document.getElementById("contant-main");

const saveTemplateBtn = document.getElementById("save-template");


let templete = [];
// let templete = [];



/**
 * create functions 
 */


/**
 * change content text header in div [ show Content Tag Name ] in aside 
 * element for click 
 */

const changeContentTagName = (btn) => {

    contentHeader.textContent = btn.dataset.nameTag;
    inputSreach.name = btn.name;
    createElement.innerHTML = `create now ${btn.name}`;
    createElement.dataset.name = btn.name;

};

function createElementDOM(event) {

    const createTag = new createElementTag('div');

    createTag.createClass()

    createTag.createId()

    createTag.setAttribute('id', 'create-tag')

    createTag.setAttribute('class', 'create-tag')

    createTag.innerHTML(`<div class="tages" tabindex="1" role="button" aria-label="${this.dataset.name}"><h1>Now ${this.dataset.name}</h1></div>`);

    dragDropElement(createTag.element, canvas)

    canvas.append(createTag.element)


}

const DOMelements = (array) => {

    return array.map((element) => {

        const createTag = new createElementTag('div');

        createTag.innerHTML(`<div class="${element} tages" id="${element}" tabindex="1" role="button" aria-label="${element}">${element}</div>`)

        createTag.createAttribute("draggable")

        createTag.setAttribute("draggable", "true")

        dragDropElement(createTag.element, canvas)

        return createTag.element;
    })

}

async function addClassBtn(event) {

    if (hasClass({ element: this, nameClass: "active" }))
        return;

    if (!hasClass({ element: showContentTagName, nameClass: "active" }))
        addClass({ el: showContentTagName, nameClass: "active" })

    let classBtn = document.querySelector(".btn-aside.active");

    if (classBtn)
        removeClass({ el: classBtn, nameClass: "active" })

    addClass({ el: this, nameClass: "active" })

    changeContentTagName(this)

    responseContentData.lastElementChild.innerHTML = ""

    const { data: [{ resault }, { msg }], success } = await fetchDataString({ url: URL_APP + "get/" + inputSreach.name, element: inputSreach, el: responseContentData, nameClass: "loading" })


    if (!success && typeof success === "boolean")
        return alert("Error getting data from server you are trying to access");

    if (!resault)
        return console.log("resault is empty");

    responseContentData.lastElementChild.append(...DOMelements(resault));


}

async function serchContent(event) {

    if (inputSreach.value === "")
        return

    if (hasClass({ element: responseContentData, nameClass: "loading" }))
        return;

    responseContentData.lastElementChild.innerHTML = ""

    addClass({ el: responseContentData, nameClass: "loading" })

    const { data: [{ resault }, { msg }], success } = await fetchDataString({ url: URL_APP + "get/search" + "/" + inputSreach.name + "/" + inputSreach.value, el: responseContentData, nameClass: "loading" })

    console.log();

    if (!success)
        return alert("Error getting data from server you are trying to access");

    if (!resault.length) {
        responseContentData.lastElementChild.innerHTML = notFound({ msg, className: 'notFound' });
        return console.log("resault is empty");
    }

    responseContentData.lastElementChild.append(...DOMelements(resault));

}

function emptyInputSearch(event) {

    if (inputSreach.value === "")
        return;

    inputSreach.value = ""

}


const hideContentAside = (event) => {

    removeClass({ el: document.querySelector(".btn-aside.active"), nameClass: "active" })
    removeClass({ el: showContentTagName, nameClass: "active" })

}

async function saveCanvas(event) {

    if (hasClass({ element: this, nameClass: "send-active" }))
        return

    if (canvas.innerHTML === "")
        return console.log("yes");

    const res = await postTemplete({ url: `${URL_APP}post/templete`, data: "testsest test test test test ", el: this, nameClass: "send-active" })


    console.log(res);


}



/**
 * add event click for elements 
 */

clickElements({ elements: btnsAside, fun: addClassBtn });

clickElement({ element: hideContentTagName, fun: hideContentAside })

clickElement({ element: createElement, fun: createElementDOM })

responseContentData.lastElementChild.append(...DOMelements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]));

clickElement({ element: searchBtn, fun: serchContent });

clickElement({ element: closeBtn, fun: emptyInputSearch });

clickElement({ element: canvas, fun: switchContentHeader })

clickElement({ element: contantMain, fun: emptyContentHeader })


clickElement({ element: saveTemplateBtn, fun: saveCanvas })

console.log(saveTemplateBtn);







