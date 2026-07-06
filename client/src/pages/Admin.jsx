import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Admin() {
  const [foods, setFoods] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const foodRes =
        await API.get("/foods");

      setFoods(foodRes.data);

      const orderRes =
        await API.get("/orders");

      setOrders(orderRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  const revenue = orders.reduce(
    (sum, order) =>
      sum + order.total,
    0
  );

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
            color: "#fbbf24",
            marginBottom: "30px",
          }}
        >
          👨‍💼 Admin Dashboard
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          <div className="admin-card">
            <h2>{foods.length}</h2>
            <p>Total Foods</p>
          </div>

          <div className="admin-card">
            <h2>{orders.length}</h2>
            <p>Total Orders</p>
          </div>

          <div className="admin-card">
            <h2>₹{revenue}</h2>
            <p>Total Revenue</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;