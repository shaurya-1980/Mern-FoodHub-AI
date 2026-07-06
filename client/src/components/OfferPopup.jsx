import { useState } from "react";
import offerBanner from "../assets/offer-banner.png";

function OfferPopup() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "700px",
          maxWidth: "90%",
          borderRadius: "25px",
          overflow: "hidden",
          background: "#111827",
          position: "relative",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        <button
          onClick={() => setShow(false)}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            width: "40px",
            height: "40px",
            border: "none",
            borderRadius: "50%",
            background: "white",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "18px",
            zIndex: 10,
          }}
        >
          ✕
        </button>

        <img
          src={offerBanner}
          alt="Offer Banner"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div
          style={{
            padding: "25px",
            textAlign: "center",
          }}
        >
        

          <h2
            style={{
              color: "white",
              marginBottom: "10px",
            }}
          >
            Flat 50% OFF
          </h2>

          <p
            style={{
              color: "#cbd5e1",
            }}
          >
            Use code <b>WELCOME50</b> on your first order
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferPopup;