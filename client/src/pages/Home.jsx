import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SkeletonCard from "../components/SkeletonCard";
import deliveryBoy from "../assets/delivery-boy.svg.jpg";
import ReviewMarquee from "../components/ReviewMarquee";
import TrendingFoods from "../components/TrendingFoods";
import StatsSection from "../components/StatsSection";
import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import OfferPopup from "../components/OfferPopup";
import API from "../services/api";
import FloatingCart from "../components/FloatingCart";
import AIRecommender from "../components/AIRecommender";
import Footer from "../components/Footer";



function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    const justLoggedIn =
      sessionStorage.getItem("showOffer");

    if (justLoggedIn) {
      setShowOffer(true);
      sessionStorage.removeItem("showOffer");
    }

    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      setLoading(true);

      const res = await API.get("/foods");

      setFoods(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      food.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      {showOffer && <OfferPopup />}

      <div className="main-container">
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "50px",
            padding: "60px 40px",
            minHeight: "500px",
            position: "relative",
            overflow: "hidden",
          }}
        >
         <div className="floating-food food1">🍕</div>
<div className="floating-food food2">🍔</div>
<div className="floating-food food3">🍟</div>
<div className="floating-food food4">🥤</div>
<div className="floating-food food5">🌮</div>
<div className="floating-food food6">🍩</div>
<div className="floating-food food7">🍜</div>
<div className="floating-food food8">🍗</div>
<div className="floating-food food9">🍣</div>
<div className="floating-food food10">🍰</div>
<div className="floating-food food11">🌭</div>
<div className="floating-food food12">🧋</div>

          <div style={{ flex: 1 }}>
            <motion.h1
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              style={{
                fontSize: "4rem",
                lineHeight: "1.2",
                background:
                  "linear-gradient(135deg,#fbbf24,#f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:
                  "transparent",
              }}
            >
              Taste The Future Of
              <br />
              Food Delivery 🍕
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              style={{
                color: "#cbd5e1",
                fontSize: "1.2rem",
                marginTop: "20px",
                lineHeight: "1.8",
              }}
            >
              Fresh Meals • Fast Delivery •
              Unforgettable Taste
              <br />
              Order from the best restaurants
              near you and enjoy premium food
              experience.
            </motion.p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "30px",
              }}
            >
            

             <button
  onClick={() =>
    document
      .getElementById("menu-section")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
  style={{
    padding: "14px 28px",
    border:
      "1px solid rgba(255,255,255,0.1)",
    borderRadius: "14px",
    background:
      "rgba(255,255,255,0.05)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",

  }}
>
  View Menu
</button>
            </div>

            <div
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "40px",
              }}
            >
              <div>
                <h2
                  style={{
                    color: "#fbbf24",
                  }}
                >
                  10K+
                </h2>
                <p
                  style={{
                    color: "#94a3b8",
                  }}
                >
                  Orders Delivered
                </p>
              </div>

              <div>
                <h2
                  style={{
                    color: "#fbbf24",
                  }}
                >
                  500+
                </h2>
                <p
                  style={{
                    color: "#94a3b8",
                  }}
                >
                  Restaurants
                </p>
              </div>

              <div>
                <h2
                  style={{
                    color: "#fbbf24",
                  }}
                >
                  4.9★
                </h2>
                <p
                  style={{
                    color: "#94a3b8",
                  }}
                >
                  Rating
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={deliveryBoy}
              alt="Delivery"
              className="hero-image"
              style={{
                width: "100%",
                maxWidth: "550px",
              }}
            />
          </div>
        </section>

        <StatsSection />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />

        <div id="menu-section" className="food-grid">
          {loading ? (
            [...Array(8)].map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <FoodCard
                key={food._id}
                food={food}
              />
            ))
          ) : (
            <h2
              style={{
                textAlign: "center",
                width: "100%",
                color: "#fbbf24",
                marginTop: "50px",
              }}
            >
              No food found 🍔
            </h2>
          )}
        </div>

        <TrendingFoods />
        <AIRecommender foods={foods} />

        <div
          style={{
            marginTop: "100px",
            padding: "80px 0",
            background:
              "linear-gradient(180deg, transparent, rgba(255,255,255,0.03), transparent)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.8rem",
              color: "#fbbf24",
              marginBottom: "15px",
            }}
          >
            ❤️ Loved By Food Lovers
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              marginBottom: "50px",
              fontSize: "18px",
            }}
          >
            Thousands of happy customers
            trust FoodHub every day
          </p>

          <ReviewMarquee />
        </div>
      </div>
      <FloatingCart />
      <Footer />
    </>
  );
}

export default Home;