import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer
      style={{
        marginTop: "100px",
        background:
          "linear-gradient(180deg,#111827,#0f172a)",
        padding: "60px 40px",
        borderTop:
          "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Brand */}
        <div>
          <h2
            style={{
              color: "#fbbf24",
              fontSize: "2rem",
              marginBottom: "15px",
            }}
          >
            FoodHub 🍔
          </h2>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.8",
            }}
          >
            Fresh food, fast delivery,
            unforgettable taste.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 style={{ color: "white" }}>
            Explore
          </h3>
  <p
  style={linkStyle}
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
>
  Home
</p>

<p
  style={linkStyle}
  onClick={() =>
    document
      .getElementById("menu-section")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
>
  Menu
</p>

<p
  style={linkStyle}
  onClick={() => navigate("/cart")}
>
  Cart
</p>

<p
  style={linkStyle}
  onClick={() => navigate("/orders")}
>
  Orders
</p>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ color: "white" }}>
            Contact
          </h3>
          <p style={linkStyle}>📞 +91 9876543210</p>
          <p style={linkStyle}>📍 Vadodara</p>
          <p style={linkStyle}>✉ support@foodhub.com</p>
        </div>

        {/* Social */}
        <div>
          <h3 style={{ color: "white" }}>
            Follow Us
          </h3>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            <span>📸</span>
            <span>🐦</span>
            <span>💼</span>
            <span>▶️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#94a3b8",
  marginTop: "14px",
  cursor: "inherit",
  transition: "0.3s",
};

export default Footer;