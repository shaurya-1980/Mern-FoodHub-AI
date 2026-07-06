import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import API from "../services/api";
import Lottie from "lottie-react";
import deliveryAnimation from "../assets/delivery-rider.json";

function Orders() {
const [orders, setOrders] = useState([]);

const user = JSON.parse(
localStorage.getItem("user")
);

useEffect(() => {
  const fetchOrders = async () => {
    if (!user?.email) return;

    try {
      const res = await API.get(`/orders/${user.email}`);
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchOrders();
}, [user]);

if (!user) {
return (
<> <Navbar />
<div
style={{
textAlign: "center",
marginTop: "100px",
}}
> <h1>Please Login First</h1> </div>
</>
);
}

return (
<> <Navbar />


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
        background:
          "linear-gradient(135deg,#fbbf24,#f97316)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor:
          "transparent",
      }}
    >
      
    </h1>

    {orders.length === 0 ? (
      <div
        style={{
          textAlign: "center",
          padding: "80px",
          borderRadius: "25px",
          background:
            "rgba(255,255,255,0.05)",
        }}
      >
        <Lottie
  animationData={deliveryAnimation}
  loop={true}
  style={{
    height: 250,
    marginBottom: 20,
  }}
/>

<h2
  style={{
    color: "#fbbf24",
    fontSize: "2rem",
  }}
>

</h2>

<p
  style={{
    color: "#cbd5e1",
  }}
>
  
</p>
      </div>
    ) : (
      orders.map((order) => (
        <motion.div
          key={order._id}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          whileHover={{
            scale: 1.02,
            y: -5,
          }}
          transition={{
            duration: 0.3,
          }}
          style={{
            display: "flex",
            gap: "25px",
            padding: "25px",
            marginBottom: "25px",
            borderRadius: "25px",
            background:
              "linear-gradient(135deg, rgba(251,191,36,0.12), rgba(34,197,94,0.08))",
            backdropFilter:
              "blur(20px)",
            border:
              "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 15px 40px rgba(0,0,0,0.25)",
          }}
        >
          <img
            src={
              order.items?.[0]?.image ||
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
            }
            alt="Food"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />

          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
              }}
            >
              <h2>
                Order#
                {order._id.slice(-6)}
              </h2>

              <span
                style={{
                  background:
                    "linear-gradient(135deg,#22c55e,#16a34a)",
                  color: "white",
                  padding:
                    "10px 18px",
                  borderRadius:
                    "999px",
                  fontWeight:
                    "bold",
                }}
              >
                {order.status}
              </span>
            </div>

           <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "20px",
    flexWrap: "wrap",
  }}
>
  <span
    style={{
      background: "#22c55e",
      color: "white",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "bold",
    }}
  >
    ✓ Order Placed
  </span>

  <span
    style={{
      color: "#64748b",
    }}
  >
    ➜
  </span>

  <span
    style={{
      background: "#334155",
      color: "white",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
    }}
  >
    Preparing
  </span>

  <span
    style={{
      color: "#64748b",
    }}
  >
    ➜
  </span>

  <span
    style={{
      background: "#334155",
      color: "white",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
    }}
  >
    Out For Delivery
  </span>

  <span
    style={{
      color: "#64748b",
    }}
  >
    ➜
  </span>

  <span
    style={{
      background: "#334155",
      color: "white",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
    }}
  >
    Delivered
  </span>
</div>

            <div
              style={{
                marginTop: "20px",
              }}
            >
              <p
                style={{
                  color: "#cbd5e1",
                }}
              >
                🍕 Items Ordered:
                {" "}
                {order.items?.length ||
                  1}
              </p>

              <p
                style={{
                  color: "#22c55e",
                  fontWeight:
                    "bold",
                }}
              >
                ✔ Payment Successful
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems:
                  "center",
                marginTop: "25px",
              }}
              
            >
              <h1
                style={{
                  color: "#fbbf24",
                  margin: 0,
                }}
              >
                ₹{order.total}
              </h1>

              <button
                style={{
                  border: "none",
                  padding:
                    "12px 20px",
                  borderRadius:
                    "12px",
                  background:
                    "linear-gradient(135deg,#f97316,#fbbf24)",
                  color: "white",
                  fontWeight:
                    "bold",
                  cursor:
                    "pointer",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </motion.div>
      ))
    )}
  </div>
</>


);
}

export default Orders;
