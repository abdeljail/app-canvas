const router = require("express").Router();

router.get("/", function(req, res) {


    res.json({  "data": "link" });


});

module.exports = router;