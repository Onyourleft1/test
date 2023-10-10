const express = require("express");
const router = express.Router();
const controller = require("../controllers/UserController.js");

router.get("/home", controller.get);
router.get("/login", controller.login);

module.exports = router;
