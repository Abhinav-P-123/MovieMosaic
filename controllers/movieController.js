let http = require("https")
let express = require("express")
let router = express.Router()

router.route("/").get((req, res) => {
    res.json({ key1: "Hello" })
})

module.exports = router
