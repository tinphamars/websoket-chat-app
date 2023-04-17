const route = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
// start passport
require("./auth/passport");
// connect redis
require("./redis");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// accept api
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:1211");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});
console.log('first middleware')
require("./middleware/auth")(app);
route(app);

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
});
