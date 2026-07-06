import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
Link,
useNavigate,
} from "react-router-dom";

function Navbar() {
const { cartItems } =
useContext(CartContext);
const trackStyle = {
  textDecoration: "none",
  color: "white",
  padding: "10px 18px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  transition: "all 0.3s ease",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  position: "relative",
};

const [showProfile, setShowProfile] =
useState(false);

const navigate = useNavigate();

const token =
localStorage.getItem("token");

const user = JSON.parse(
localStorage.getItem("user")
);

const handleLogout = () => {
localStorage.removeItem("token");
localStorage.removeItem("user");


navigate("/login");


};

const navItemStyle = {
textDecoration: "none",
color: "white",
padding: "10px 18px",
borderRadius: "12px",
background:
"rgba(255,255,255,0.05)",
border:
"1px solid rgba(255,255,255,0.08)",
transition: "all 0.3s ease",
fontWeight: "500",
};

const handleHover = (e) => {
e.target.style.transform =
"translateY(-2px)";
e.target.style.background =
"rgba(251,191,36,0.15)";
};

const handleLeave = (e) => {
e.target.style.transform =
"translateY(0)";
e.target.style.background =
"rgba(255,255,255,0.05)";
};

const handleTrackHover = (e) => {
  e.target.style.transform = "translateY(-2px)";
  e.target.style.background = "rgba(251,191,36,0.12)";
  e.target.style.boxShadow =
    "0 8px 25px rgba(251,191,36,0.18)";
};

const handleTrackLeave = (e) => {
  e.target.style.transform = "translateY(0)";
  e.target.style.background =
    "rgba(255,255,255,0.05)";
  e.target.style.boxShadow = "none";
};

return (
<nav
style={{
position: "sticky",
top: 0,
zIndex: 100,
backdropFilter: "blur(25px)",
background:
"rgba(255,165,0,0.05)",
borderBottom:
"1px solid rgba(255,255,255,0.08)",
}}
>
<div
style={{
width: "90%",
margin: "auto",
padding: "20px",
display: "flex",
justifyContent:
"space-between",
alignItems: "center",
}}
>
<h1
style={{
margin: 0,
fontSize: "2.8rem",
}}
>
<Link
to="/"
style={{
textDecoration: "none",
color: "#fbbf24",
fontWeight: "bold",
}}
>
🍕 FoodHub AI </Link> </h1>


    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px",
        borderRadius: "18px",
        background:
          "rgba(255,255,255,0.03)",
      }}
    >
      <Link
        to="/"
        style={navItemStyle}
        onMouseEnter={
          handleHover
        }
        onMouseLeave={
          handleLeave
        }
      >
        HOME
      </Link>
<Link
  to="/tracking"
  style={trackStyle}
  onMouseEnter={handleTrackHover}
  onMouseLeave={handleTrackLeave}
>
  <span
    style={{
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "#22c55e",
      boxShadow:
        "0 0 12px rgba(34,197,94,0.9)",
      display: "inline-block",
    }}
  />
  Track Order
</Link>
      <Link
        to="/cart"
        style={navItemStyle}
        onMouseEnter={
          handleHover
        }
        onMouseLeave={
          handleLeave
        }
      >
        CART (
        {cartItems.length})
      </Link>

      {!token ? (
        <>
          <Link
            to="/login"
            style={navItemStyle}
            onMouseEnter={
              handleHover
            }
            onMouseLeave={
              handleLeave
            }
          >
            Login
          </Link>

          <Link
            to="/register"
            style={navItemStyle}
            onMouseEnter={
              handleHover
            }
            onMouseLeave={
              handleLeave
            }
          >
            Register
          </Link>
        </>
      ) : (
        <div
          style={{
            position:
              "relative",
          }}
        >
          <button
            onClick={() =>
              setShowProfile(
                !showProfile
              )
            }
            style={{
              background:
                "linear-gradient(135deg,#fbbf24,#f97316)",
              border:
                "none",
              color:
                "white",
              padding:
                "10px 18px",
              borderRadius:
                "12px",
              cursor:
                "pointer",
              fontWeight:
                "bold",
              boxShadow:
                "0 8px 25px rgba(249,115,22,0.3)",
            }}
          >
            👤 {user?.name} ▼
          </button>

          {showProfile && (
            <div
              style={{
                position:
                  "absolute",
                top: "50px",
                right: 0,
                width:
                  "220px",
                background:
                  "rgba(15,23,42,0.95)",
                backdropFilter:
                  "blur(20px)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius:
                  "15px",
                overflow:
                  "hidden",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.35)",
              }}
            >
 
              <Link
                to="/orders"
                onClick={() =>
                  setShowProfile(
                    false
                  )
                }
                style={{
                  display:
                    "block",
                  padding:
                    "14px 18px",
                  color:
                    "white",
                  textDecoration:
                    "none",
                }}
              >
                📦 My Orders
              </Link>

              <button
                onClick={
                  handleLogout
                }
                style={{
                  width:
                    "100%",
                  padding:
                    "14px 18px",
                  border:
                    "none",
                  background:
                    "none",
                  color:
                    "#ef4444",
                  cursor:
                    "pointer",
                  textAlign:
                    "left",
                  fontWeight:
                    "bold",
                }}
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
</nav>


);
}

export default Navbar;
