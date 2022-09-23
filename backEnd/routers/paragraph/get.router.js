const router = require("express").Router();

router.get("/", function(req, res) {


    res.json({  "data": "para" });


});

module.exports = router;