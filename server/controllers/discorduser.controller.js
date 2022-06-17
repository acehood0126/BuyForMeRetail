const db = require("../models");
const Discorduser = db.discorduser;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.discordid) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const discorduser = new Discorduser({
    discordid: req.body.discordid,
    discordname: req.body.discordname,
    walletadddress: req.body.wadres,
    groupid: req.body.groupid,
  });

  // Save Tutorial in the database
  Discorduser.find({
    discordid: req.body.discordid,
  })
    .then((data) => {
      if (!data.length) {
        discorduser
          .save(discorduser)
          .then((data) => {
            res.send({ message: "Success" });
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                "Some error occurred while creating the DiscordUser.",
            });
          });
      } else {
        res.send({ message: "The user exists" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving DiscordUser" });
    });
};
