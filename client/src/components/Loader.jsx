import { motion } from "framer-motion";
import pizza from "../assets/pizza-loader.png";

function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0f172a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
      }}
    >
      <motion.img
        src={pizza}
        alt="Loading"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        style={{
          width: "130px",
          height: "130px",
        }}
      />

      <motion.h2
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        style={{
          color: "#fbbf24",
          marginTop: "25px",
          fontSize: "28px",
        }}
      >
        Cooking your order...
      </motion.h2>
    </div>
  );
}

export default Loader;