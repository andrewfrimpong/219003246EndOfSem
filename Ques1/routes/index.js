const express = require("express");
const router = express.Router();
const User = require("../model/User");

//Home route
router.get("/", (req, res) => {
  res.render("home");
});

// Registration route
router.get("/register", (req, res) => {
  res.render("registration");
});

//Post route
router.post("/register", (req, res) => {
  const registrationData = {
    patientID: req.body.patientID,
    fname: req.body.fname,
    lname: req.body.lname,
    DOB: req.body.DOB,
    contact: req.body.contact,
    resAddress: req.body.resAddress,
  };
  User.findOne({ patientID: registrationData.patientID }).then((user) => {
    if (user) {
      console.log(
        "Sorry there is a patients with that ID please check if your ID is correct"
      );
      return res.redirect("/register");
    } else {
      User.create(registrationData).then((newUser) => {
        res.redirect("/patients");
      });
    }
  });
});

router.get("/patients", (req, res) => {
  User.find({})
    .then((users) => {
      res.render("patients", {
        users: users.reverse(),
      });
    })
    .catch((error) => {
      res.json({
        msg: `Sorrr ${error.message}`,
      });
    });
});

module.exports = router;
