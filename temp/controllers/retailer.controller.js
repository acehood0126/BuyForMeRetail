const db = require("../models");
const retailer = db.retailer;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.retailer) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const newretailer = new retailer({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  });

  // Save Tutorial in the database
  retailer
    .find({
      email: req.body.email,
    })
    .then((data) => {
      if (!data.length) {
        newretailer
          .save(newretailer)
          .then((data) => {
            res.send({ message: "Success" });
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                "Some error occurred while creating the retailer.",
            });
          });
      } else {
        res.send({ message: "The user exists" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving retailer" });
    });
};
