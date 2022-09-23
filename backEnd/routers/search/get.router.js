const router = require("express").Router();
const checkNameTag = require("../../middleware/checkNameTag.h.js");
const checkString = require("../../middleware/checkString.h.js");

router.get("/:name/:value", checkNameTag, checkString, function (req, res) {

    const { value } = req.params

    res.json({
        'success': true,
        'data': [{ 'resault': [] }, { 'msg':  `Sorry, we couldn't find any results for ${value}. Try searching for something related` }],
    }, 200);

});

module.exports = router;