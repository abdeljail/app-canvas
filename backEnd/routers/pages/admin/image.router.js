
const router = require("express").Router();

router.get('/', function (req, res) {
    res.sendFile(process.cwd() + `${process.env.APP_URL_PAGES}/admin/image.html`);
});

module.exports = router;