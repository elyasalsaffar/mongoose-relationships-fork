const User = require('../models/user.js')

const createUser = async (req, res) => {
  const newUser = await User.create(req.body)
  res.send(newUser)
}

module.exports = {
  createUser
}