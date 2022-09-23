const OPTIONS_IMGS = [".jpg", ".png", ".jpeg", ".gif", ".bmp", ".tif", ".tiff|image"];

const string = (value) => {

    if (value === "")
        return false

    if (value === null)
        return false

    if (value === undefined)
        return false

    if (typeof value !== "string")
        return false

    value = value.trim()


    if (value.includes("<") || value.includes("</"))
        return false

    return true
}

const file = (form) => {

    if (form.size > 100000)
        return {
            status: false,
            msg: "size must be between   30000 and 30000",
        };
    if (form.type === "")
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
    string,
    file,
}