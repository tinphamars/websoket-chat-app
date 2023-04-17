const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "tuong_app",
  "root",
  "root",
  {
    dialect: "mysql",
    host: "0.0.0.0",
    port: 3307,
  }
);

sequelize.sync();

(async () => {
  try {
    //check user login
    // await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
