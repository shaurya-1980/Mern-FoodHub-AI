const express = require("express");
const Food = require("../models/Food");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const food = await Food.create(req.body);

    res.status(201).json({
      message: "Food added successfully",
      food,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();

    res.json(foods);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Food updated successfully",
      updatedFood
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {

    await Food.findByIdAndDelete(req.params.id);

    res.json({
      message: "Food deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;