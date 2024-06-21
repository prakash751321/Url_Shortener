const express = require("express");
const URL = require("../MVC_Arch/model/url");

const router = express.Router()

router.get("/", async (req, res) => {
    const allURLs = await URL.find({})
    return res.render("home", {
        result : allURLs
    })
})

router.get("/signup", (req, res) => {
    return res.render("signUp")
})

router.get("/login", (req, res) => {
    return res.render("login")
})

module.exports = router