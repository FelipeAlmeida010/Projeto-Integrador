const express = require("express");
const registerController = require("../Controller/registerController");

const router = express.Router();

router.post("/register", registerController.register);

router.get("/user", (req, res) => {
    console.log(req.user)
})

module.exports = router;
