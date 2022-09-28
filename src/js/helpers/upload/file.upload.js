const OPTIONS_IMGS = ["image/jpg", "image/png", "image/jpeg", "image/gif", "image/bmp", "image/tif", "image/tiff|image"];

const uplaodImage = (img) => {

    if (img.size > 500000)
        return {
            status: false,
            msg: "size must be between 1mg and 50mg",
        };
    if (!OPTIONS_IMGS.includes(img.type))
        return {
            status: false,
            msg: "type file must be [   .....  .... ]",
        };
    return {
        status: true,
        msg: "success",
    };

}

const readerFile = ({ element, file }) => {

    try {

        if (!(element instanceof Element))
            throw new Error('Invalid Element DOM  "' + element + '"');

        if (!(file instanceof Object))
            throw new Error('Invalid file  "' + element + '"');

        const reader = new FileReader();

        reader.onload = function (e) {
            element.src = e.target.result
        }
        reader.readAsDataURL(file);

        return element

    } catch (error) {
        console.error(error);
    }


}

export {
    uplaodImage,
    readerFile
}