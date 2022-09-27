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

export {
    uplaodImage,
}