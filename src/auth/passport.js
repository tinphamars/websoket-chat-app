const passport = require("passport");
const User = require("../models/User");
const passportJwt = require("passport-jwt");
const StrategyJwt = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
      secretOrKey: "8Zz5tw0Ionm3XPZZfN0NOml3z9FMfmpgXwovR9fp6ryDIoGRM8EPHAB6iHsc0fb",
    },
    async function (payload, done) {
      console.log(payload)
      return User.findOne({ where: { id: payload.id } })
        .then(async (user) => {
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        })
        .catch((err) => {
          return done(err, false);
        });
    }
  )
);
