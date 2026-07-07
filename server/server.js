const authRoutes = require("./routes/authRoutes");
const foodRoutes = require("./routes/foodRoutes");
const orderRoutes = require("./routes/orderRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Food = require("./models/Food");
require("dotenv").config();

const app = express();

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
const allowedOrigins = [
  frontendUrl,
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  process.env.CLIENT_URL,
  process.env.BACKEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || /https:\/\/.*\.vercel\.app$/i.test(origin)) {
        callback(null, true);
        return;
      }

      callback(null, false);
    },
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.get("/api", (req, res) => {
  res.send("API Running...");
});

const seedFoods = async () => {
  try {
    const count = await Food.countDocuments();
    if (count === 0) {
      await Food.insertMany([
        {
          name: "Spicy Burger",
          price: 12.99,
          category: "Burgers",
          description: "Juicy grilled beef burger with spicy sauce",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
          rating: 4.8,
          deliveryTime: "20 mins",
        },
        {
          name: "Margherita Pizza",
          price: 10.5,
          category: "Pizza",
          description: "Classic pizza with tomato sauce and mozzarella",
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
          rating: 4.9,
          deliveryTime: "25 mins",
        },
        {
          name: "Chicken Wrap",
          price: 8.99,
          category: "Wraps",
          description: "Crispy chicken wrap with fresh veggies",
          image: "https://images.unsplash.com/photo-1516467508483-ee7212f2d6d5?auto=format&fit=crop&w=800&q=80",
          rating: 4.7,
          deliveryTime: "15 mins",
        },
      ]);
      console.log("Sample foods seeded successfully");
    }
  } catch (err) {
    console.error("Food seeding error:", err.message);
  }
};

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
  })
  .then(async () => {
    console.log("MongoDB Connected");
    await seedFoods();
  })
  .catch((err) => console.error("MongoDB connection error:", err.message));

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;