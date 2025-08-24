const User = require("../models/User.js");


module.exports.indexSignup = (req, res) => {
  res.render("users/signup.ejs");
};
module.exports.postindexSignup = async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.login(registeredUser, (err) => {
        if (err) {
          next(err);
        }
        req.flash("success", "Welcome to wanderlust!");
        res.redirect("/listings");
      });
    } catch (err) {
      req.flash("error", err.message);
      res.redirect("/signup");
    }
  } ;

  module.exports.indexlogin = (req, res) => {
  res.render("users/login.ejs");
} 
  module.exports.postindexlogin = async (req, res) => {
    req.flash("success", "Welcome back to wanderlust! you are logged in!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);

  }
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "logged you out!");
    res.redirect("/listings");
  });
}