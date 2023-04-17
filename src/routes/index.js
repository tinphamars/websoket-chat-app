const contact = require("./contact");
const user = require("./users");

function route(app) {
  app.use("/", contact);
  app.use("/user", user);
}

module.exports = route;
