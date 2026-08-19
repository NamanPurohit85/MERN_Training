require("dotenv").config();
const express = require("express");
const reviewRoutes = require("./src/routes/review.route");
const connectDB = require("./src/config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ success: true, message: "Review API is running" });
});
app.use("/api/reviews", reviewRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  res
    .status(statusCode)
    .json({ success: false, message: err.message || "Internal server error" });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
