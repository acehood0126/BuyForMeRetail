var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var retailersRouter = require("./routes/retailers");

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

// app.use("/", indexRouter);
app.use("/", (req, res) => {
  res.json({ message: "Welcome to you" });
});
app.use("/retailers", retailersRouter);
// app.use('/api/users', require('./routes/api/users'));
app.use("/api/users", (req, res) => {
  res.json({ message: "users" });
});

module.exports = app;
