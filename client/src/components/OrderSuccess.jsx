import Lottie from "lottie-react";
import successAnimation from "../assets/order-success.json";

function OrderSuccess() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "rgba(0,0,0,0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 9999,
      }}
    >
      <Lottie
        animationData={
          successAnimation
        }
        loop={false}
        style={{
          width: 350,
          height: 350,
        }}
      />

      <h1
        style={{
          color: "#22c55e",
          marginTop: "-30px",
        }}
      >
        
      </h1>

      <p
        style={{
          color: "white",
          fontSize: "18px",
        }}
      >
        
      </p>
    </div>
  );
}

export default OrderSuccess;