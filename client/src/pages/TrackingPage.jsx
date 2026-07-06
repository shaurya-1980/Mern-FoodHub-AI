import Navbar from "../components/Navbar";
import OrderTracking from "../components/OrderTracking";

function TrackingPage() {
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

export default TrackingPage;