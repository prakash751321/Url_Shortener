const express = require("express");
const urlRoute = require("./routes/url_routes")
const staticRoute = require("./routes/static_Router")
const userRouter = require("./routes/auth/user_Auth")
const cookieParser = require("cookie-parser")
const { restrictToLoggedinUserOnly } = require("./middleware/auth")
const { connectMongoDb } = require("./mongodbConnection");
const { getShortIdUrl } = require("./MVC_Arch/controller/url_controller");
const URL = require("./MVC_Arch/model/url");

const app = express();
const port = 7001

connectMongoDb("mongodb://127.0.0.1:27017/url_Shortener")

    //  middlewares

app.use(express.json());    //  to support json encoded bodies
app.use(express.urlencoded({ extended: false })); // to support form data
app.use(cookieParser())     //  for parsing cookies

    //  middleware -- End

app.use("/url", restrictToLoggedinUserOnly, urlRoute)
app.use("/url/:shortId", getShortIdUrl)
app.use("/", staticRoute)
app.use("/user", userRouter)

    //  Server Side Rendering

app.set("view engine", "ejs")   // set view engine to ejs for express
app.set("views", "./views")     // set views folder of ejs




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
