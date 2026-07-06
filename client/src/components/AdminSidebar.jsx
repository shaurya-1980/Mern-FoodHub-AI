import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "#0f172a",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "30px 20px",
        borderRight:
          "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h1
        style={{
          color: "#fbbf24",
          marginBottom: "40px",
        }}
      >
        🍕 FoodHub Admin
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Link
          to="/admin"
          style={linkStyle}
        >
          📊 Dashboard
        </Link>

        <Link
          to="/admin/foods"
          style={linkStyle}
        >
          🍔 Foods
        </Link>

      
      </div>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "white",
  padding: "14px",
  borderRadius: "12px",
  background:
    "rgba(255,255,255,0.04)",
};

export default AdminSidebar;