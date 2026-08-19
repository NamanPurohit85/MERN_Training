const Joi = require("joi");

const createReviewSchema = Joi.object({
  title: Joi.string().trim().min(3).max(80).required(),
  comment: Joi.string().trim().min(10).max(500).required(),
  rating: Joi.number().integer().min(1).max(5).required(),
  reviewerName: Joi.string().trim().min(2).max(50).required(),
});

const updateReviewSchema = Joi.object({
  title: Joi.string().trim().min(3).max(80),
  comment: Joi.string().trim().min(10).max(500),
  rating: Joi.number().integer().min(1).max(5),
  reviewerName: Joi.string().trim().min(2).max(50),
}).min(1);

module.exports = {
  createReviewSchema,
  updateReviewSchema,
};
