const express = require("express")
const transactionController = require("../Controller/transactionController")
const loginController = require("../Controller/loginController")
const router = express.Router()

router.post("/transaction", loginController.getId, transactionController.create)

router.get("/transaction/list", loginController.getId, transactionController.findAll)

router.get("/transaction/listone", loginController.getId, transactionController.findLatest)

router.put("/transaction/update", loginController.getId, transactionController.update)

router.delete("/delete/:id", loginController.getId, transactionController.delete)

module.exports = router