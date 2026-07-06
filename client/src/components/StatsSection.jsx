import { motion } from "framer-motion";

function StatsSection() {
  const stats = [
    {
      number: "50K+",
      label: "Orders Delivered",
    },
    {
      number: "4.9★",
      label: "Customer Rating",
    },
    {
      number: "100+",
      label: "Restaurants",
    },
    {
      number: "30 Min",
      label: "Average Delivery",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: "25px",
        marginTop: "70px",
        marginBottom: "70px",
      }}
    >
      {stats.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          style={{
            background:
              "rgba(255,255,255,0.05)",
            backdropFilter:
              "blur(20px)",
            border:
              "1px solid rgba(255,255,255,0.08)",
            borderRadius: "25px",
            padding: "35px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#fbbf24",
              fontSize: "2.5rem",
              marginBottom: "10px",
            }}
          >
            {item.number}
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
            }}
          >
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsSection;