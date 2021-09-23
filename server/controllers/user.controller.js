const User = require('../models/user.model');

exports.createUser = async (req, res) => {
  let newUser = { ...req.body }
  
  try {
    const user = await new User(newUser).save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }

}

exports.login = async (req, res) => {
  const {
    email,
    password
  } = req.body
}
