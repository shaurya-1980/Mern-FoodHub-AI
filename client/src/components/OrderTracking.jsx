import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

const restaurantPos = [22.3072, 73.1812]; // Vadodara
const userPos = [22.2950, 73.2100];

const deliveryIcon = new L.DivIcon({
  html: "🛵",
  className: "",
  iconSize: [30, 30],
});

const restaurantIcon = new L.DivIcon({
  html: "🍴",
  className: "",
  iconSize: [30, 30],
});

const userIcon = new L.DivIcon({
  html: "🏠",
  className: "",
  iconSize: [30, 30],
});

function OrderTracking() {
  const [deliveryPos, setDeliveryPos] = useState(restaurantPos);
  const [status, setStatus] = useState("Order Confirmed");
  const [eta, setEta] = useState(20);

  useEffect(() => {
    const statuses = [
      "Preparing Food",
      "Picked Up",
      "Near You",
      "Delivered",
    ];

    let step = 0;

    const interval = setInterval(() => {
      setEta((prev) => Math.max(prev - 1, 0));

      setDeliveryPos((prev) => {
        const lat =
          prev[0] + (userPos[0] - restaurantPos[0]) / 20;

        const lng =
          prev[1] + (userPos[1] - restaurantPos[1]) / 20;

        return [lat, lng];
      });

      if (step < statuses.length) {
        setStatus(statuses[step]);
        step++;
      }

      if (step >= 20) clearInterval(interval);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 style={{ color: "#fbbf24" }}>
        Live Order Tracking
      </h2>

      <p style={{ color: "white" }}>
        Status: {status}
      </p>

      <p style={{ color: "#22c55e" }}>
        ETA: {eta} mins
      </p>

      <MapContainer
        center={restaurantPos}
        zoom={13}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={restaurantPos} icon={restaurantIcon}>
          <Popup>Restaurant</Popup>
        </Marker>

        <Marker position={userPos} icon={userIcon}>
          <Popup>Your Location</Popup>
        </Marker>

        <Marker position={deliveryPos} icon={deliveryIcon}>
          <Popup>Delivery Partner</Popup>
        </Marker>

        <Polyline
          positions={[restaurantPos, userPos]}
        />
      </MapContainer>
    </div>
  );
}

export default OrderTracking;