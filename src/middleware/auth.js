module.exports = (app) => {
  const client = require("../redis");
  const passport = require("passport");
  app.use((req, res, next) => {
    try {
      passport.authenticate("jwt", { session: false }, (err, user, info) => {
        console.log(user)
        if (!user) {
          return next(null);
        }
        const token = req.cookies["api-auth"];
        client.get(String(user.id)).then((redisUser) => {
          console.log('redis user',redisUser)
          let parsedUserData = JSON.parse(redisUser);
          console.log(parsedUserData)
          parsedUserData = parsedUserData[String(user.id)];
          if (parsedUserData && parsedUserData.includes(token)) {
            res.clearCookie("api-auth");
            return res.status(401).json({ message: "Invalid Token!" });
          } else {
            return next();
          }
        });
      })(req, res, next);
    } catch (err) {
      console.log("__Error: ", err);
      next(err);
    }
  });
};
