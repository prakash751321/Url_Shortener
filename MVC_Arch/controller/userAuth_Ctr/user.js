const { v4: uuidv4 } = require("uuid")
const { setUser } = require("../../../service/session_auth")
const User = require("../../model/user");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password
    })
    return res.render("home")
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const logedUser = await User.findOne({ email, password });
    if (!logedUser) return res.render("login", {
        error: "Invalid Credentials"
    })

    const sessionId = uuidv4()  //  to create session id
    setUser(sessionId, User)
    res.cookie("uid", sessionId)    //  to create a cookie
    return res.redirect("/")
}


module.exports = {
    handleUserSignup,
    handleUserLogin
}