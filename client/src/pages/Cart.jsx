import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import API from "../services/api";
import { toast } from "react-toastify";
import OrderTracking from "../components/OrderTracking";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const navigate = useNavigate();
  const [showTracking, setShowTracking] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cartItems.reduce(
  (sum, item) =>
    sum + item.price * item.quantity,
  0
);

const deliveryFee = cartItems.length ? 40 : 0;
const total = subtotal + deliveryFee;
const applyCoupon = () => {
  if (coupon === "FOOD50") {
    setDiscount(50);
    toast.success("Coupon Applied 🎉");
  } else if (coupon === "SAVE100") {
    setDiscount(100);
    toast.success("Coupon Applied 🎉");
  } else {
    setDiscount(0);
    toast.error("Invalid Coupon");
  }
};
const finalTotal = total - discount;

  const handlePlaceOrder = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (!user) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      await API.post("/orders", {
        email: user.email,
        items: cartItems,
        total: finalTotal,
      });

      setShowTracking(true);

      toast.success(
        "Order Placed Successfully 🎉"
      );

     
    } catch (error) {
      console.log(error);
      toast.error("Failed To Place Order");
    }
  };
  if (showTracking) {
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "90%",
          margin: "40px auto",
        }}
      >
        <OrderTracking />
      </div>
    </>
  );
}

  return (
    <>
      

      <Navbar />

      <div
        style={{
          width: "90%",
          margin: "40px auto",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "30px",
            color: "#fbbf24",
          }}
        >
          🛒 Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "100px 20px",
              background:
                "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              borderRadius: "30px",
              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h1 style={{ fontSize: "5rem" }}>
              🍔
            </h1>

            <h2>Your Cart Is Empty</h2>

            <p style={{ color: "#94a3b8" }}>
              Add some delicious food first.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "30px",
            }}
          >
            <div>
              {cartItems.map((item) => (
                <motion.div
                  key={item._id}
                  whileHover={{ y: -5 }}
                  style={{
                    display: "flex",
                    gap: "25px",
                    marginBottom: "25px",
                    background:
                      "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(25px)",
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "25px",
                    padding: "20px",
                    boxShadow:
                      "0 15px 40px rgba(0,0,0,0.25)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "160px",
                      height: "160px",
                      objectFit: "cover",
                      borderRadius: "20px",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <h2>{item.name}</h2>

                    <span
                      style={{
                        background: "#f97316",
                        color: "white",
                        padding: "6px 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                      }}
                    >
                      {item.category}
                    </span>

                    <p
                      style={{
                        marginTop: "15px",
                        color: "#cbd5e1",
                      }}
                    >
                      {item.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        marginTop: "15px",
                      }}
                    >
                      <button
                        onClick={() =>
                          decreaseQty(item._id)
                        }
                        style={qtyBtn}
                      >
                        -
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQty(item._id)
                        }
                        style={qtyBtn}
                      >
                        +
                      </button>
                    </div>

                    <div
                      style={{
                        marginTop: "15px",
                        display: "flex",
                        justifyContent:
                          "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h2
                        style={{
                          color: "#fbbf24",
                        }}
                      >
                        ₹
                        {item.price *
                          item.quantity}
                      </h2>

                      <button
                        onClick={() =>
                          removeFromCart(
                            item._id
                          )
                        }
                        style={{
                          border: "none",
                          background: "#ef4444",
                          color: "white",
                          padding: "12px 18px",
                          borderRadius: "12px",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div
              style={{
                position: "sticky",
                top: "100px",
                height: "fit-content",
                background:
                  "rgba(255,255,255,0.05)",
                backdropFilter: "blur(25px)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius: "25px",
                padding: "30px",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.25)",
              }}
            >
              <h2
                style={{
                  marginBottom: "25px",
                }}
              >
                Order Summary
              </h2>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  marginBottom: "15px",
                }}
              >
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  marginBottom: "15px",
                }}
              >
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                }}
              >
                <span>Delivery</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    color: "#22c55e",
  }}
>
  <span>Discount</span>
  <span>-₹{discount}</span>
</div>

              <hr style={{ margin: "25px 0" }} />

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                <span>Total</span>
                <span
                  style={{
                    color: "#fbbf24",
                  }}
                >
                  ₹{finalTotal}
                </span>
              </div>
              <div style={{ marginTop: "20px" }}>
  <input
    value={coupon}
    onChange={(e) =>
      setCoupon(e.target.value)
    }
    placeholder="Enter Coupon Code"
    style={{
      width: "100%",
      padding: "14px",
      borderRadius: "12px",
      border: "none",
      marginBottom: "12px",
      boxSizing: "border-box",
    }}
  />

  <button
    onClick={applyCoupon}
    style={{
      width: "100%",
      padding: "14px",
      border: "none",
      borderRadius: "12px",
      background: "#22c55e",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    Apply Coupon
  </button>
</div>

              <button
                onClick={handlePlaceOrder}
                style={{
                  width: "100%",
                  marginTop: "25px",
                  padding: "16px",
                  border: "none",
                  borderRadius: "16px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "white",
                  cursor: "pointer",
                  background:
                    "linear-gradient(135deg,#fbbf24,#f97316)",
                }}
              >
                Place Order
              </button>

              <button
                onClick={clearCart}
                style={{
                  width: "100%",
                  marginTop: "15px",
                  padding: "14px",
                  border: "none",
                  borderRadius: "16px",
                  background: "#ef4444",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const qtyBtn = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  border: "none",
  background: "#f97316",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Cart;