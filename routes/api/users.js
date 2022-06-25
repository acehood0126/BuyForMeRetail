var express = require("express");
var router = express.Router();
const user = require("../../controllers/user.controller");
const { check, validationResult } = require("express-validator");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("api/users");
});

router.post(
  "/",
  check("fullName").not().isEmpty().withMessage("FullName is required"),
  check("displayName", "DisplayName is required").not().isEmpty(),
  check("email", "Your email is not valid").isEmail(),
  check("password", "Your password must be at least 8 characters").isLength({
    min: 8,
  }),
  check("phoneNum", "PhoneNumber is required").isEmpty(),
  check("address1", "Address1 is required").isEmpty(),
  check("city", "City is required").isEmpty(),
  check("county", "County is required").isEmpty(),
  check("state", "State is required").isEmpty(),
  check("zipCode", "ZipCode is required").isEmpty(),
 
 user.create

);

module.exports = router;
