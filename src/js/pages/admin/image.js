import "../../../assets/css/image.css"
import image from "../../../assets/images/upload-image.png"
import { uplaodImage, readerFile } from "../../helpers/upload/file.upload.js"
import { clickElement } from "../../core/events/click.event.js"
import { addClass } from "../../core/attributes/class/add.att.js"
import { hasClass, hasClasses } from "../../core/attributes/class/has.att.js"
import { removeClass } from "../../core/attributes/class/remove.att.js"
import { postImage } from "../../core/apis/post/post.image.js"
const URL_APP = "http://localhost:3000/canvas/apis/"
const imageUpload = document.getElementById("image");
const change_file = document.getElementById("upload");
const alert = document.getElementById("alert");
const closeAlert = document.getElementById("close-alert");
const removeImage = document.getElementById("dlt-img");
const send = document.getElementById("send-file");

function showAlert(msg) {

    if (hasClass({ element: alert, nameClass: "alert-error" }))
        return alert.firstElementChild.innerHTML = msg;

    alert.firstElementChild.innerHTML = msg;
    addClass({ el: alert, nameClass: "alert-error" });

}

function readImage(event) {

    const { status, msg } = uplaodImage(change_file.files[0])

    if (!status)
        return showAlert(msg)

    if (hasClass({ element: alert, nameClass: "alert-error" }))
        removeClass({ el: alert, nameClass: "alert-error" });

    readerFile({ element: imageUpload, file: change_file.files[0] })

    if (hasClass({ element: removeImage, nameClass: "show-btn" }))
        return;

    addClass({ el: removeImage, nameClass: "show-btn" })

}

async function postFile(event) {

    if (hasClass({ element: this, nameClass: "send-active" }))
        return
    addClass({ element: this, nameClass: "send-active" })

    const res = await postImage({ url: `${URL_APP}`, data: change_file.files[0] })

}

change_file.addEventListener("change", readImage)

clickElement({ element: closeAlert, fun: () => removeClass({ el: alert, nameClass: "alert-error" }) })

clickElement({ element: removeImage, fun: () => { imageUpload.src = image; removeClass({ el: removeImage, nameClass: "show-btn" }) } })

clickElement({ element: send, fun: postFile });

imageUpload.src = image;