const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/User.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const {
  indexSignup,
  postindexSignup,
  indexlogin,
  postindexlogin,
  logout,
} = require("../controllers/users.js");
router.route("/signup").get(indexSignup).post(wrapAsync(postindexSignup));
router
  .route("/login")
  .get(indexlogin)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    postindexlogin
  );

// index logout
router.get("/logout", logout);
module.exports = router;
