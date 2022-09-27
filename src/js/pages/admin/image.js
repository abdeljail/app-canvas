import "../../../assets/css/image.css"
import image from "../../../assets/images/upload-image.png"
import { uplaodImage } from "../../helpers/upload/file.upload.js"
import { clickElement } from "../../core/events/click.event.js"
import { addClass } from "../../core/attributes/class/add.att.js"
import { hasClass } from "../../core/attributes/class/has.att.js"
import { removeClass } from "../../core/attributes/class/remove.att.js"

const imageUpload = document.getElementById("image");
const change_file = document.getElementById("upload");
const alert = document.getElementById("alert");

console.log(change_file);


function showAlert(msg) {

    if (hasClass(msg, "alert-error"))
        return alert.innerHTML = msg;

    alert.innerHTML = msg;
    addClass(alert, "alert-error");

}


function readImage(event) {

    const { status, msg } = uplaodImage(change_file.files[0])

    if (!status)
        return showAlert(msg)

}





change_file.addEventListener("change", readImage)

imageUpload.src = image;