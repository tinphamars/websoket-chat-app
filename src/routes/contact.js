const express = require("express");
const ContactController = require("../controller/ContactController");
const route = express.Router();

route.get("/contact", ContactController.index);

module.exports = route;
