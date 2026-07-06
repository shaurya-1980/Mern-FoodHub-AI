function AdminStatsCard({
  title,
  value,
  icon,
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(251,191,36,0.08))",
        padding: "25px",
        borderRadius: "20px",
        color: "white",
      }}
    >
      <h3>{icon} {title}</h3>

      <h1>{value}</h1>
    </div>
  );
}

export default AdminStatsCard;