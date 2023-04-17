const dayjs = require("dayjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

class UserController {
  index(req, res) {
    res.render("contact");
  }

  async getById(req, res) {
    const email = "admin@admin.com";
    res.render("contact", { email });
  }

  async login(req, res) {
    const { email, password } = req.body;
    const userWithEmail = await User.findOne({ where: { email } }).catch(
      (err) => {
        console.log("__error: ", err);
      }
    );

    if (!userWithEmail)
      return res
        .status(400)
        .json({ message: "Email or password does not match!" });

    if (userWithEmail.password !== password)
      return res
        .status(400)
        .json({ message: "Email or password does not match!" });

    const jwtToken = jwt.sign(
      { id: userWithEmail.id, email: userWithEmail.email },
      "8Zz5tw0Ionm3XPZZfN0NOml3z9FMfmpgXwovR9fp6ryDIoGRM8EPHAB6iHsc0fb"
    );

    userWithEmail.password = undefined;

    res.cookie("api-auth", jwtToken, {
      secure: false,
      httpOnly: true,
      expires: dayjs().add(7, "days").toDate(),
    });

    res.json({ message: "Welcome Back!", user: userWithEmail });
  }
}
module.exports = new UserController();
