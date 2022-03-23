const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const dotEnv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./config/db");

//* Load Config
dotEnv.config({ path: "./config/config.env" });

//* Database connection
connectDB();

const app = express();

//* Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//* View Engine
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layouts/mainLayout");
app.set("views", "views");

//* BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//* Static Folder
app.use(express.static(path.join(__dirname, "public")));

//* Routes

app.use("/", require("./routers/blog"));
app.use("/users", require("./routers/users"));
app.use("/dashboard", require("./routers/dashboard"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
