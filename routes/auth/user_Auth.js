const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../../MVC_Arch/controller/userAuth_Ctr/user")


const router = express.Router();


router.post("/", handleUserSignup)
router.post("/login", handleUserLogin)


module.exports = router