const express = require("express");
const router = express.Router();
const metricsController = require("../controllers/metricsController");
const authController = require("../controllers/authController");

router.get(
  "/",
  authController.protect,
  authController.restrictTo("admin"),
  metricsController.getMetrics
);

module.exports = router;
