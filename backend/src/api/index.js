const express = require("express");
const registerApi = require("./routes/register");
const loginApi = require("./routes/login");
const dashboard = require("./routes/dashboard");
const transaction = require("./routes/transaction")
const users = require("./routes/user")

const router = express.Router();

router.use(users);
router.use(registerApi);
router.use(loginApi);
router.use(dashboard);
router.use(transaction);

module.exports = router;
