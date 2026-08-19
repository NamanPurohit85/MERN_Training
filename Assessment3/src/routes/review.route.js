const express = require("express");
const router = express.Router();

const reviewController = require("../controller/reviewController");
const validationMiddleware = require("../middleware/validationMiddleware");
const {
  createReviewSchema,
  updateReviewSchema,
} = require("../validationSchema/reviewValidationSchema");

router.post(
  "/createReview",
  validationMiddleware(createReviewSchema),
  reviewController.createReview
);

router.get(
  "/getReviews",
  reviewController.getReviews
);

router.get(
  "/:id",
  reviewController.getReviewById
);

router.patch(
  "/:id",
  validationMiddleware(updateReviewSchema),
  reviewController.updateReview
);

router.delete(
  "/:id",
  reviewController.deleteReview
);

module.exports = router;
