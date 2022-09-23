const router = require("express").Router();

router.post("/", function(req, res) {

    console.log(req.params);

    res.json({  "data": "templete post" });


});

module.exports = router;