
const router = require("express").Router();

router.get('/', function (req, res) {

    console.log("send file ");

    
    res.sendFile(process.cwd() + `${process.env.APP_URL_PAGES}index.html`);
});

module.exports = router;