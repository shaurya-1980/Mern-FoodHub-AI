function SkeletonCard() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          height: "220px",
          background:
            "linear-gradient(90deg,#1e293b 25%,#334155 50%,#1e293b 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s infinite",
        }}
      />

      <div style={{ padding: "15px" }}>
        <div
          style={{
            height: "20px",
            borderRadius: "8px",
            marginBottom: "12px",
            background:
              "linear-gradient(90deg,#1e293b 25%,#334155 50%,#1e293b 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }}
        />

        <div
          style={{
            height: "15px",
            width: "60%",
            borderRadius: "8px",
            background:
              "linear-gradient(90deg,#1e293b 25%,#334155 50%,#1e293b 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }}
        />
      </div>
    </div>
  );
}

export default SkeletonCard;