import { motion } from "framer-motion";

function SearchBar({
  search,
  setSearch,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "30px 0",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search pizza, burger, ice cream..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          width: "500px",
          maxWidth: "90%",
          padding: "16px 24px",
          borderRadius: "50px",
          border:
            "1px solid rgba(255,255,255,0.1)",
          background:
            "rgba(255,255,255,0.08)",
          backdropFilter:
            "blur(15px)",
          color: "white",
          fontSize: "16px",
          outline: "none",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.2)",
        }}
      />
    </motion.div>
  );
}

export default SearchBar;