const ReviewModel = require("../model/reviewModel");
const AppError = require("../utils/AppError");

const createReview = async (data) => {
  const { title, comment, rating, reviewerName } = data;

  const alreadyReviewed = await ReviewModel.findOne({ reviewerName, title });
  if (alreadyReviewed) {
    throw new AppError("Aap ye review pehle de chuke ho", 409);
  }

  const review = await ReviewModel.create({
    title,
    comment,
    rating,
    reviewerName,
  });
  return review;
};

const getReviews = async () => {
  const reviews = await ReviewModel.find();
  if (!reviews) {
    throw new AppError("Review not found", 404);
  }
  return reviews;
};

const getReviewById = async (id) => {
  const review = await ReviewModel.findById(id);
  if (!review) {
    throw new AppError("Review not found", 404);
  }
  return review;
};

const updateReview = async (id, data) => {
  const review = await ReviewModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  if (!review) {
    throw new AppError("Review not found", 404);
  }
  return review;
};

const deleteReview = async (id) => {
  const review = await ReviewModel.findByIdAndDelete(id);
  if (!review) {
    throw new AppError("Review not found", 404);
  }
  return review;
};

module.exports = {
  createReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
