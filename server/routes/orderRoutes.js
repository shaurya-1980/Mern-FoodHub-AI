const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("Incoming Order:", req.body);

    const { email, items, total } = req.body;

    const order = await Order.create({
      email,
      items,
      total,
    });

    console.log("Saved Order:", order);

    res.json(order);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
router.get("/top-foods", async (req, res) => {
  try {
    const orders = await Order.find();

    const foodSales = {};

    orders.forEach((order) => {
      order.items.forEach((item) => {
        if (foodSales[item.name]) {
          foodSales[item.name].count += 1;
        } else {
          foodSales[item.name] = {
            name: item.name,
            image: item.image,
            count: 1,
          };
        }
      });
    });

    const topFoods = Object.values(foodSales)
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    res.json(topFoods);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:email", async (req, res) => {
  try {
    const orders = await Order.find({
      email: req.params.email,
    }).sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const order =
      await Order.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        { new: true }
      );

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


module.exports = router;