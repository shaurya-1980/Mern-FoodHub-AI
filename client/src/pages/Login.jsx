import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      toast.success("Login Successful 🎉");

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        sessionStorage.setItem(
          "showOffer",
          "true"
        );
        navigate("/");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login Failed"
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
      {/* LEFT SIDE */}
      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          background: "#fef3c7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          color: "#111827",
        }}
      >
        {/* Blurred circles */}
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(251,191,36,0.35)",
            filter: "blur(90px)",
            top: "10%",
            left: "10%",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(249,115,22,0.25)",
            filter: "blur(80px)",
            bottom: "8%",
            right: "8%",
          }}
        />

        {/* Floating Foods */}
   <div style={food(60, 80, 52, "0s")}>🍕</div>
<div style={food(130, 500, 45, "0.5s")}>🍔</div>
<div style={food(520, 90, 42, "1s")}>🍟</div>
<div style={food(620, 500, 40, "1.5s")}>🍩</div>
<div style={food(300, 550, 42, "2s")}>🍜</div>
<div style={food(220, 120, 38, "2.5s")}>🧋</div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1
            style={{
              fontSize: "5rem",
              fontWeight: "900",
              lineHeight: "0.95",
            }}
          >
            WELCOME
            <br />
            BACK
          </h1>

          <p
            style={{
              marginTop: "25px",
              fontSize: "1.25rem",
              color: "#374151",
            }}
          >
            Login and continue your delicious journey
          </p>

          <div
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              fontSize: "1.15rem",
            }}
          >
            <div>⚡ Fast Delivery</div>
            <div>🍔 AI Recommendations</div>
            <div>⭐ Premium Experience</div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          flex: 1,
          background:
            "linear-gradient(135deg,#c2410c,#f59e0b)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <motion.form
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "470px",
            padding: "50px",
            background: "rgba(255,255,255,0.16)",
            backdropFilter: "blur(22px)",
            border:
              "1px solid rgba(255,255,255,0.2)",
            borderRadius: "32px",
            boxShadow:
              "0 25px 70px rgba(0,0,0,0.35)",
          }}
        >
          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: "800",
              marginBottom: "35px",
              textAlign: "center",
              color: "white",
            }}
          >
            Sign In
          </h2>

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

          <motion.button
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            style={{
              width: "100%",
              padding: "18px",
              border: "none",
              borderRadius: "18px",
              cursor: "pointer",
              color: "#111827",
              fontWeight: "800",
              fontSize: "18px",
              background:
                "linear-gradient(135deg,#fde68a,#ffffff)",
              boxShadow:
                "0 10px 30px rgba(255,255,255,0.25)",
            }}
          >
            Login
          </motion.button>

          <button
            type="button"
            onClick={() =>
              navigate("/admin-login")
            }
            style={{
              width: "100%",
              padding: "16px",
              marginTop: "18px",
              borderRadius: "18px",
              border: "2px solid white",
              background: "transparent",
              color: "white",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            👨‍💼 Admin Login
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: "white",
            }}
          >
            New User?{" "}
            <Link
              to="/register"
              style={{
                color: "#fef3c7",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Create Account
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
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.9)",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};

const food = (top, left, size, delay = "0s") => ({
  position: "absolute",
  top,
  left,
  fontSize: size,
  opacity: 0.9,
  animation: `float 4s ease-in-out infinite`,
  animationDelay: delay,
});

export default Login;