import {
  motion,
  useMotionValue,
} from "framer-motion";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function FoodCard({ food }) {
  const { addToCart } =
    useContext(CartContext);

  const [hovered, setHovered] =
    useState(false);

  const rotateX =
    useMotionValue(0);
  const rotateY =
    useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const x =
      e.clientX - rect.left;
    const y =
      e.clientY - rect.top;

    const centerX =
      rect.width / 2;
    const centerY =
      rect.height / 2;

    rotateY.set(
      (x - centerX) / 18
    );
    rotateX.set(
      -(y - centerY) / 18
    );
  };

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      onMouseMove={
        handleMouseMove
      }
      onMouseEnter={() =>
        setHovered(true)
      }
      onMouseLeave={() => {
        setHovered(false);
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{
        width: "340px",
        background: "#111827",
        border:
          "1px solid rgba(255,255,255,0.05)",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.45)",
        position: "relative",
        rotateX,
        rotateY,
        transformStyle:
          "preserve-3d",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          position: "relative",
        }}
      >
        {/* Shine Effect */}
        <motion.div
          animate={{
            opacity: hovered
              ? 1
              : 0,
          }}
          style={{
            position:
              "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.18), transparent 60%)",
            zIndex: 5,
            pointerEvents:
              "none",
          }}
        />

        <img
          src={food.image}
          alt={food.name}
          style={{
            width: "100%",
            aspectRatio:
              "1 / 1",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Hover Overlay */}
        <motion.div
          animate={{
            opacity: hovered
              ? 1
              : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          style={{
            position:
              "absolute",
            inset: 0,
            background:
              "rgba(15,23,42,0.92)",
            display: "flex",
            flexDirection:
              "column",
            justifyContent:
              "center",
            alignItems:
              "center",
            padding: "20px",
            textAlign:
              "center",
            pointerEvents:
              hovered
                ? "auto"
                : "none",
            zIndex: 6,
          }}
        >
          <h2
            style={{
              color:
                "#fbbf24",
            }}
          >
            {food.name}
          </h2>

          <p
            style={{
              color:
                "#cbd5e1",
              marginTop:
                "10px",
              lineHeight:
                "1.6",
            }}
          >
            {
              food.description
            }
          </p>

          <p
            style={{
              color:
                "#22c55e",
              marginTop:
                "15px",
            }}
          >
            ⭐ {food.rating}
          </p>

          <p
            style={{
              color:
                "#f97316",
              marginTop:
                "8px",
            }}
          >
            🚚{" "}
            {
              food.deliveryTime
            }
          </p>
        </motion.div>
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems:
              "center",
            gap: "10px",
          }}
        >
          <h2
            style={{
              fontSize:
                "1.2rem",
              fontWeight:
                "700",
              margin: 0,
            }}
          >
            {food.name}
          </h2>

          <span
            style={{
              background:
                "#16a34a",
              color:
                "white",
              padding:
                "5px 10px",
              borderRadius:
                "10px",
              fontSize:
                "13px",
              fontWeight:
                "600",
            }}
          >
            ⭐ {food.rating}
          </span>
        </div>

        <div
          style={{
            marginTop: "12px",
          }}
        >
          <span
            style={{
              background:
                "#f97316",
              color:
                "white",
              padding:
                "6px 12px",
              borderRadius:
                "999px",
              fontSize:
                "12px",
              fontWeight:
                "600",
            }}
          >
            {food.category}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems:
              "center",
            marginTop: "18px",
          }}
        >
          <span
            style={{
              color:
                "#fbbf24",
              fontWeight:
                "600",
            }}
          >
            🚚{" "}
            {
              food.deliveryTime
            }
          </span>

          <span
            style={{
              fontSize:
                "1.3rem",
              fontWeight:
                "700",
              color:
                "#fbbf24",
            }}
          >
            ₹{food.price}
          </span>
        </div>

        <button
          onClick={() =>
            addToCart(food)
          }
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "14px",
            border: "none",
            borderRadius:
              "14px",
            fontWeight:
              "700",
            fontSize:
              "15px",
            color: "white",
            cursor: "pointer",
            background:
              "linear-gradient(135deg,#fbbf24,#f97316)",
            boxShadow:
              "0 10px 25px rgba(249,115,22,0.35)",
          }}
        >
          Add To Cart
        </button>
      </div>
    </motion.div>
  );
}

export default FoodCard;