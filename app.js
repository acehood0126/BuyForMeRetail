var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/api/index");
var retailersRouter = require("./routes/retailers");
var userRouter = require("./routes/api/users");
var auth = require("./routes/api/auth");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use("/api", indexRouter);
app.use("/api/retailers", retailersRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", auth);
// app.use("/api/auth/sign-in", auth);

module.exports = app;
