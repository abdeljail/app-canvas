const router = require("express").Router();

router.get("/", function(req, res) {


    res.json({  "data": "image" });


});

module.exports = router;