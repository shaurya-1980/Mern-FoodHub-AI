import { useState } from "react";
import { motion } from "framer-motion";

function AIRecommender({ foods }) {
  const [open, setOpen] = useState(false);
  const [recommendation, setRecommendation] =
    useState(null);

  const recommendFood = (mood) => {
    let filtered = [];

    if (mood === "Cheat Meal") {
      filtered = foods.filter(
        (food) =>
          food.category === "Pizza" ||
          food.category === "Burger"
      );
    }

    if (mood === "Healthy") {
      filtered = foods.filter(
        (food) =>
          food.category === "Salad" ||
          food.category === "Paneer"
      );
    }

    if (mood === "Late Night") {
      filtered = foods.filter(
        (food) =>
          food.category === "Snacks" ||
          food.category === "Fast Food"
      );
    }

    if (mood === "Spicy") {
      filtered = foods.filter(
        (food) =>
          food.category === "Indian" ||
          food.category === "Biryani"
      );
    }

    if (filtered.length > 0) {
      const random =
        filtered[
          Math.floor(
            Math.random() * filtered.length
          )
        ];

      setRecommendation(random);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: "30px",
          left: "30px",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#8b5cf6,#6366f1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "34px",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow:
            "0 15px 40px rgba(99,102,241,0.45)",
        }}
      >
        🤖
      </motion.div>

      {/* Popup */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              width: "500px",
              background: "#111827",
              borderRadius: "25px",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#fbbf24" }}>
              🤖 AI Food Assistant
            </h2>

            <p style={{ color: "#94a3b8" }}>
              What are you craving today?
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "25px",
              }}
            >
              {[
                "Cheat Meal",
                "Healthy",
                "Late Night",
                "Spicy",
              ].map((mood) => (
                <button
                  key={mood}
                  onClick={() =>
                    recommendFood(mood)
                  }
                  style={{
                    padding: "12px 18px",
                    border: "none",
                    borderRadius: "12px",
                    background: "#f97316",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {mood}
                </button>
              ))}
            </div>

            {recommendation && (
              <div style={{ marginTop: "25px" }}>
                <img
                  src={recommendation.image}
                  alt={recommendation.name}
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "18px",
                  }}
                />

                <h3>{recommendation.name}</h3>
                <p style={{ color: "#fbbf24" }}>
                  ₹{recommendation.price}
                </p>
              </div>
            )}

            <button
              onClick={() => setOpen(false)}
              style={{
                marginTop: "25px",
                padding: "12px 20px",
                border: "none",
                borderRadius: "12px",
                background: "#ef4444",
                color: "white",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AIRecommender;