const categories = [
  "All",
  "Pizza",
  "Fast Food",
  "Italian",
  "Chinese",
  "Snacks",
  "Sandwich"
];

function CategoryFilter({ selected, setSelected }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "40px"
      }}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          style={{
            padding: "10px 20px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            background:
              selected === category
                ? "#f97316"
                : "#1f2937",
            color: "white"
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;