import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (
      email ===
        "admin@foodhub.com" &&
      password === "admin123"
    ) {
      localStorage.setItem(
        "admin",
        "true"
      );

      toast.success(
        "Admin Login Successful"
      );

      navigate("/admin");
    } else {
      toast.error(
        "Invalid Admin Credentials"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent:
          "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b)",
      }}
    >
      <motion.form
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        onSubmit={
          handleAdminLogin
        }
        style={{
          width: "420px",
          padding: "40px",
          borderRadius: "25px",
          background:
            "rgba(255,255,255,0.05)",
          backdropFilter:
            "blur(20px)",
        }}
      >
        <h1
          style={{
            color: "#fbbf24",
            textAlign:
              "center",
          }}
        >
          👨‍💼 Admin Portal
        </h1>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button type="submit">
          Login As Admin
        </button>
      </motion.form>
    </div>
  );
}

export default AdminLogin;