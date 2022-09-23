const router = require("express").Router();

router.get("/", function(req, res) {

    // res.json({
    //     'success': true,
    //     'data': [{ 'resault': [] }, { 'msg':  `Sorry, we couldn't find any results for "4545454545". Try searching for something related or`  }],
    // }, 200);
    return; 
    res.json({
        'success': true,
        'data': [{ 'resault': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] }, { 'msg': 'successfully  fetch data tag templete' }],
    }, 200);


});

module.exports = router;