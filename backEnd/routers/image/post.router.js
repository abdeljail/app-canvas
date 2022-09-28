const router = require("express").Router();

router.post("/"  , function(req, res) {

    res.json({  "data": "image" });

});

module.exports = router;