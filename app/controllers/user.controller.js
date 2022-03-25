const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };

  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.getAllUsers = (req, res) => {
    User.find({}, function(err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.status(200).send(result)
    }).select(['-password']);
  };