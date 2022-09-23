module.exports = (req, res, next) => {
    const {name} = req.params
    const namesTags = [ "templete" , "image" ,"link" , "heading" , "paragraph"];
    if (namesTags.includes(name))
        return next();
    res.json({error: `this params is not valid : ${name} `});
};