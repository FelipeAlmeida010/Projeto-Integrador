const express = require("express")
const userController = require("../Controller/userController")

const router = express.Router()

router.get("/users", userController.getUsers)

router.get("/users/profile", userController.getUsers)

router.delete("/users/delete", userController.deleteUser)

router.put("/users/update", userController.updateUser)

module.exports = router