const User = require("../models/user");

// route protected by jwt
const userInfo = async (req, res) => {
  console.log("Sending user information!");
  return res.status(200).json({
    email: req.user.email,
    username: req.user.username,
    avatar: req.user.avatar,
  });
};

const getCustomers = async (_, res) => {
  try {
    const customers = await User.find({ role: "user" });
    console.log("New request!");
    res.send(customers);
  } catch (e) {
    return res.status(401).send("Couldn't fetch customers.");
  }
};

module.exports = {
  userInfo,
  getCustomers,
};
