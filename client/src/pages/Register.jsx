import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [hover, setHover] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", formData);
      toast.success("Registration Successful 🎉");
      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* LEFT */}
      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg,#ea580c,#f59e0b)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "50px",
        }}
      >
        {/* Floating foods */}
        <div style={food(40, 70, 55)}>🍕</div>
        <div style={food(120, 480, 45)}>🍔</div>
        <div style={food(520, 80, 42)}>🍟</div>
        <div style={food(620, 500, 42)}>🍩</div>
        <div style={food(300, 550, 40)}>🌮</div>
        <div style={food(220, 100, 36)}>🧋</div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: 2 }}
        >
          <h1
            style={{
              fontSize: "5rem",
              fontWeight: "900",
              lineHeight: "0.95",
              marginBottom: "25px",
            }}
          >
            JOIN
            <br />
            FOODHUB
          </h1>

          <p
            style={{
              fontSize: "1.3rem",
              marginBottom: "50px",
            }}
          >
            Join FoodHub AI and start ordering smarter.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              fontSize: "1.25rem",
              fontWeight: "500",
            }}
          >
            <div>⚡ AI Recommendations</div>
            <div>🚀 Instant Delivery</div>
            <div>⭐ Premium Experience</div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT */}
      <div
        style={{
          flex: 1,
          background: "#fef3c7",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "480px",
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(18px)",
            padding: "50px",
            borderRadius: "30px",
            boxShadow:
              "0 25px 60px rgba(0,0,0,0.15)",
          }}
        >
          <h2
            style={{
              fontSize: "2.7rem",
              fontWeight: "800",
              marginBottom: "35px",
              textAlign: "center",
              color: "#1f2937",
            }}
          >
            Create Account
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              width: "100%",
              padding: "18px",
              border: "none",
              borderRadius: "18px",
              cursor: "pointer",
              color: "white",
              fontWeight: "700",
              fontSize: "18px",
              transition: "all 0.3s ease",
              transform: hover
                ? "translateY(-3px) scale(1.02)"
                : "translateY(0)",
              boxShadow: hover
                ? "0 15px 30px rgba(249,115,22,0.35)"
                : "none",
              background: hover
                ? "linear-gradient(135deg,#ea580c,#f97316)"
                : "linear-gradient(135deg,#f59e0b,#f97316)",
            }}
          >
            Register
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: "#6b7280",
            }}
          >
            Already have account?{" "}
            <Link
              to="/login"
              style={{
                color: "#ea580c",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </p>
        </motion.form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "20px",
  borderRadius: "16px",
  border: "1px solid #d1d5db",
  fontSize: "16px",
  background: "#f8fafc",
  outline: "none",
  boxSizing: "border-box",
};

const food = (top, left, size) => ({
  position: "absolute",
  top,
  left,
  fontSize: size,
  opacity: 0.8,
  animation: "float 5s ease-in-out infinite",
});

export default Register;