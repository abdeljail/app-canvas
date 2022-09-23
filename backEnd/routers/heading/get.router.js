const router = require("express").Router();

router.get("/", function (req, res) {

    res.json({
        'success': true,
        'data': [{ 'resault': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] }, { 'status': 'successfully  fetch data tag heading' }],
    }, 200);

});

module.exports = router;