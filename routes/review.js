const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");

const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const listingController = require("../controllers/reviews.js");

// reviews route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(listingController.indexReview)
);
// delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(listingController.DeleteReview)
);
module.exports = router;
