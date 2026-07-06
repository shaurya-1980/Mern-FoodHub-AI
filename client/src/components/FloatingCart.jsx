import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

function FloatingCart() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) return null;

  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      onClick={() => navigate("/cart")}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "75px",
        height: "75px",
        borderRadius: "50%",
        background:
          "linear-gradient(135deg,#fbbf24,#f97316)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 9999,
        boxShadow:
          "0 15px 40px rgba(249,115,22,0.45)",
        fontSize: "34px",
      }}
    >
      🛒

      <div
        style={{
          position: "absolute",
          top: "-5px",
          right: "-5px",
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: "#ef4444",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        {cartItems.length}
      </div>
    </motion.div>
  );
}

export default FloatingCart;