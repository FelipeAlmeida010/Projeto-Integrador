const express = require("express")
const loginController = require("../Controller/loginController")

const router = express.Router()

router.post("/login", loginController.login)

router.get("/login/loggedin", loginController.loggedIn)

router.get("/login/logout", loginController.logout)

router.get("/login/token", loginController.loggedUserToken)


module.exports = router
