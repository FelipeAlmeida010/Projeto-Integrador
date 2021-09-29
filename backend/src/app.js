const express = require("express");
const cookieParser = require("cookie-parser")
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
require("./auth/passport");
require("./models/User");

const middlewares = require("./middlewares");
const api = require("./api");

const app = express();


app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());



app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨✨🌈🦄",
  });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
