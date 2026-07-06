import { useEffect, useState } from "react";
import API from "../services/api";

import AdminSidebar from "../components/AdminSidebar";
import AdminStatsCard from "../components/AdminStatsCard";
import AdminAnalytics from "./AdminAnalytics";

function AdminDashboard() {
  const [foods, setFoods] = useState([]);
  const [topFoods, setTopFoods] = useState([]);

useEffect(() => {
  fetchFoods();
  fetchTopFoods();
}, []);

  const fetchTopFoods = async () => {
  try {
    const res = await API.get("/orders/top-foods");
    setTopFoods(res.data);
  } catch (err) {
    console.log(err);
  }
};

  const fetchFoods = async () => {
    try {
      const res = await API.get("/foods");

      setFoods(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AdminSidebar />

      <div
        style={{
          marginLeft: "280px",
          padding: "40px",
        }}
      >
        <h1
          style={{
            color: "white",
            marginBottom: "30px",
          }}
        >
          Dashboard
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          <AdminStatsCard
            title="Foods"
            value={foods.length}
            icon="🍔"
          />

          <AdminStatsCard
            title="Orders"
            value="124"
            icon="📦"
          />

          <AdminStatsCard
            title="Revenue"
            value="₹48K"
            icon="💰"
          />

          <AdminStatsCard
            title="Users"
            value="52"
            icon="👥"
          />
        </div>

        <AdminAnalytics foods={foods} />
        <div
  style={{
    marginTop: "40px",
    background: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "25px",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.08)",
  }}
>
  <h2
    style={{
      color: "#fbbf24",
      marginBottom: "25px",
    }}
  >
    🏆 Top Selling Foods
  </h2>

  {topFoods.length === 0 ? (
    <p style={{ color: "#94a3b8" }}>
      No sales yet
    </p>
  ) : (
    topFoods.map((food, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "18px 0",
          borderBottom:
            "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            width: "50px",
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: "#fbbf24",
          }}
        >
          {index === 0
            ? "🥇"
            : index === 1
            ? "🥈"
            : index === 2
            ? "🥉"
            : `#${index + 1}`}
        </div>

        <img
          src={food.image}
          alt={food.name}
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />

        <div style={{ flex: 1 }}>
          <h3 style={{ color: "white" }}>
            {food.name}
          </h3>
        </div>

        <div
          style={{
            color: "#22c55e",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          {food.count} sold
        </div>
      </div>
    ))
  )}
</div>
      </div>
    </>
  );
}

export default AdminDashboard;