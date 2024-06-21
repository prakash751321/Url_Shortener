const express = require("express");
const { generateNewShortUrl, getShortIdUrl, getAnalytics } = require("../MVC_Arch/controller/url_controller")

const router = express.Router()

router.post("/", generateNewShortUrl)
// router.get("/:shortId", getShortIdUrl)
router.get("/analytics/:shortId", getAnalytics)

module.exports = router