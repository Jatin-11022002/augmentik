const express = require("express");
const router = express.Router();
const { login, register } = require("../controller/auth");
const { sendMail, updateContent, getData } = require("../controller/util");

router
  .route("/login")
  .post(login)
  .get((req, res) => res.render("login.ejs"));
router
  .route("/register")
  .post(register)
  .get((req, res) => res.render("register.ejs"));

router.route("/home").get((req, res) => res.render("home.ejs", {}));

router.route("/sendMail").post(sendMail);
router.route("/updateContent").post(updateContent);
router.route("/getData").get(getData);
module.exports = router;
