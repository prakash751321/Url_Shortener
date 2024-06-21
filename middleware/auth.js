const { getUser } = require("../service/session_auth")

async function restrictToLoggedinUserOnly (req, res, next) {
    const userId = req.cookies?.uid

    if (!userId) {
        console.log("Please login first")
        return res.redirect("/login")
    }
    const user = getUser(userId)
    if (user) {
        console.log("No user !")
        console.log(userId)
        return res.redirect("/")
    }

    req.user = user
    next()
}

module.exports = {
    restrictToLoggedinUserOnly
}