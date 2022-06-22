const db = require("../models");
const user = db.user;
const { check, validationResult } = require("express-validator");


// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //Check Email
     const {
      fullName,
      displayName,
      email,
      password,
      phoneNum,
      address1,
      address2,
      city,
      county,
      state,
      zipCode,
    } = req.body;

  
  // Create a Tutorial
  const newUser = new user({
    email: email,
    displayName: displayName,
    fullName: fullName,
    password: password,
    phoneNum: phoneNum,
    address1: address1,
    address2: address2,
    city: city,
    county: county,
    state: state,
    zipCode: zipCode    
  });

  // Save Tutorial in the database
  user
    .find({
      email: email,
    })
    .then((data) => {
      if (!data.length) {
        user
          .save(newUser)
          .then((data) => {
            res.send({ message: "Success" });
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                "Some error occurred while creating the user.",
            });
          });
      } else {
        res.send({ message: "The user exists" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving user" });
    });
};
