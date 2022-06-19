var express = require("express");
var router = express.Router();
const retailer = require("../controllers/retailer.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/addretailer", retailer.create);

module.exports = router;
