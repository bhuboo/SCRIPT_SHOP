const bcrypt = require("bcrypt");
const joi = require('joi');
const express = require("express");
const { DIRECTOR } = require('../../models/director');
const router = express.Router();
const genAuthToken = require('../../Token/genAuthToken');

router.post("/", async (req, res) => {
  const schema = joi.object({
    Firstname: joi.string().min(4).max(30).required(),
    Lastname: joi.string().min(1).max(30).required(),
    Email: joi.string().min(4).required(),
    Mobilenumber: joi.string().min(10).max(10).required(),
    Address: joi.string().required(),
    Password: joi.string().min(8).max(30).required(),
  });

  const director = {
    fname: req.body.Firstname,
    lname: req.body.Lastname,
    email: req.body.Email,
    mnumber: req.body.Mobilenumber,
    Address: req.body.Adress,
    password: req.body.Password,
  };

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let User = await DIRECTOR.findOne({ email: director.email });

  if (User) return res.status(400).send("User already exist...GO to LOGIN");

  User = new DIRECTOR(director);

  const salt = await bcrypt.genSalt(10);

  User.password = await bcrypt.hash(User.password, salt);

  User = await User.save();

  const token = genAuthToken(User);

  res.send(token);
});

module.exports = router;
