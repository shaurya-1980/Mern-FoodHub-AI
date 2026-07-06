function ReviewMarquee() {
  const reviews = [
    "⭐⭐⭐⭐⭐ Amazing food and super fast delivery!",
    "⭐⭐⭐⭐⭐ Best Biryani in town.",
    "⭐⭐⭐⭐⭐ Food arrived hot and fresh.",
    "⭐⭐⭐⭐⭐ Loved the Pizza and Burger combo.",
    "⭐⭐⭐⭐⭐ Great customer service.",
    "⭐⭐⭐⭐⭐ Delivery within 20 minutes!",
    "⭐⭐⭐⭐⭐ Highly recommended FoodHub.",
  ];

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        marginTop: "80px",
        marginBottom: "50px",
      }}
    >
      <div className="review-track">
        {[...reviews, ...reviews].map(
          (review, index) => (
            <div
              key={index}
              className="review-card"
            >
              {review}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ReviewMarquee;