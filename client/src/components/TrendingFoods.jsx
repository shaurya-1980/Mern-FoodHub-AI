import { motion } from "framer-motion";

const trendingFoods = [
  {
    name: "Butter Chicken",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  },
  {
    name: "Paneer Tikka",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
  },
  {
    name: "Hyderabadi Biryani",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
  },
  {
    name: "Masala Dosa",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
  },
  {
    name: "Chole Bhature",
    image:
      "https://images.unsplash.com/photo-1626132647523-66f5bf380027",
  },
];

function TrendingFoods() {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <h2
        style={{
          color: "#fbbf24",
          fontSize: "2.8rem",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        🔥 Trending This Week
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          marginBottom: "40px",
        }}
      >
        Most ordered dishes by FoodHub users
      </p>

      <div className="trending-slider">
        {trendingFoods.map(
          (food, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
              }}
              className="trending-card"
            >
              <img
                src={food.image}
                alt={food.name}
              />

              <div
                className="trending-overlay"
              >
                <h3>{food.name}</h3>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

export default TrendingFoods;