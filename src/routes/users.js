const express = require("express");
const UserController = require("../controller/UserController");
const route = express.Router();

route.get("/:id", UserController.getById);
route.post("/login", UserController.login);

module.exports = route;
