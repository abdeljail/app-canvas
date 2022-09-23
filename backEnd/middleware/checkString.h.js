module.exports = (req, res, next) => {
    const { value } = req.params
    if (value !== "" && typeof value === "string") 
        next();
    else
        res.json({ error: `this params is not valid : ${value} ` });
    
};