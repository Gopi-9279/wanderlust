const express = require("express");
const router = express.Router({ mergeParams: true });
const { OAuth2Client } = require("google-auth-library");
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
const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_CALLBACK_URL
);

router.get("/auth/google", (req, res) => {
  const authUrl = googleClient.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
  });

  res.redirect(authUrl);
});

router.get("/auth/google/callback", async (req, res, next) => {
  try {
    const { code } = req.query;

    const { tokens } = await googleClient.getToken(code);
    googleClient.setCredentials(tokens);

    const response = await googleClient.request({
      url: "https://www.googleapis.com/oauth2/v2/userinfo",
    });

    const googleUser = response.data;

    let user = await User.findOne({
      $or: [{ googleId: googleUser.id }, { email: googleUser.email }],
    });

    if (!user) {
      const username = `${googleUser.email.split("@")[0]}-${googleUser.id.slice(-6)}`;

      user = new User({
        username,
        email: googleUser.email,
        googleId: googleUser.id,
        displayName: googleUser.name,
      });

      await user.save();
    } else if (!user.googleId) {
      user.googleId = googleUser.id;
      user.displayName = googleUser.name;
      await user.save();
    }

    req.login(user, (err) => {
      if (err) return next(err);

      req.flash("success", "Successfully logged in with Google!");
      res.redirect("/listings");
    });
  } catch (err) {
    next(err);
  }
});
// index logout
router.get("/logout", logout);
module.exports = router;
