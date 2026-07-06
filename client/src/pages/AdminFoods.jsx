import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function AdminFoods() {
const [foods, setFoods] = useState([]);

const [showModal, setShowModal] =
useState(false);

const [foodData, setFoodData] =
useState({
name: "",
price: "",
category: "",
description: "",
image: "",
});
const [editingFood, setEditingFood] =
  useState(null);

useEffect(() => {
fetchFoods();
}, []);

const fetchFoods = async () => {
try {
const res = await API.get("/foods");
setFoods(res.data);
} catch (err) {
console.log(err);
}
};

const handleDelete = async (id) => {
try {
await API.delete(`/foods/${id}`);


  toast.success("Food Deleted");

  fetchFoods();
} catch (err) {
  toast.error("Delete Failed");
}


};

const handleSaveFood = async () => {
  try {
    if (editingFood) {
      await API.put(
        `/foods/${editingFood._id}`,
        foodData
      );

      toast.success(
        "Food Updated Successfully ✏️"
      );
    } else {
      await API.post(
        "/foods/add",
        foodData
      );

      toast.success(
        "Food Added Successfully 🍔"
      );
    }

    fetchFoods();

    setShowModal(false);

    setEditingFood(null);

    setFoodData({
      name: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
  } catch (err) {
    toast.error("Operation Failed");
  }
};
const handleEdit = (food) => {
  setEditingFood(food);

  setFoodData({
    name: food.name,
    price: food.price,
    category: food.category,
    description: food.description,
    image: food.image,
  });

  setShowModal(true);
};

return (
<div
style={{
padding: "40px",
color: "white",
}}
>
<div
style={{
display: "flex",
justifyContent:
"space-between",
alignItems: "center",
marginBottom: "30px",
}}
> <h1>
🍔 Food Management </h1>


    <button
      onClick={() =>
        setShowModal(true)
      }
      style={{
        padding: "12px 20px",
        border: "none",
        borderRadius: "12px",
        background:
          "linear-gradient(135deg,#fbbf24,#f97316)",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      + Add Food
    </button>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fill,minmax(320px,1fr))",
      gap: "20px",
    }}
  >
    {foods.map((food) => (
      <div
        key={food._id}
        style={{
          background:
            "rgba(255,255,255,0.05)",
          padding: "20px",
          borderRadius: "20px",
          border:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <img
          src={food.image}
          alt={food.name}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />

        <h2>{food.name}</h2>

        <p>{food.category}</p>

        <h3
          style={{
            color: "#fbbf24",
          }}
        >
          ₹{food.price}
        </h3>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "15px",
          }}
        >
    
          <button
  onClick={() => handleEdit(food)}
  style={{
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
  }}
>
  Edit
</button>

          <button
            onClick={() =>
              handleDelete(
                food._id
              )
            }
            style={{
              flex: 1,
              padding: "10px",
              border: "none",
              borderRadius:
                "10px",
              background:
                "#ef4444",
              color: "white",
              cursor:
                "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>

  {showModal && (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent:
          "center",
        alignItems:
          "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          width: "500px",
          background:
            "#111827",
          padding: "30px",
          borderRadius:
            "20px",
        }}
      >
      <h2>
  {editingFood
    ? "✏️ Edit Food"
    : "🍔 Add New Food"}
</h2>

        <input
          placeholder="Food Name"
          value={foodData.name}
          onChange={(e) =>
            setFoodData({
              ...foodData,
              name:
                e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          placeholder="Price"
          value={foodData.price}
          onChange={(e) =>
            setFoodData({
              ...foodData,
              price:
                e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          placeholder="Category"
          value={
            foodData.category
          }
          onChange={(e) =>
            setFoodData({
              ...foodData,
              category:
                e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          placeholder="Image URL"
          value={foodData.image}
          onChange={(e) =>
            setFoodData({
              ...foodData,
              image:
                e.target.value,
            })
          }
          style={inputStyle}
        />

        <textarea
          placeholder="Description"
          value={
            foodData.description
          }
          onChange={(e) =>
            setFoodData({
              ...foodData,
              description:
                e.target.value,
            })
          }
          style={{
            ...inputStyle,
            minHeight:
              "100px",
          }}
        />
        

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <button
            onClick={
              handleSaveFood
            }
            style={{
              flex: 1,
              padding:
                "12px",
              border: "none",
              borderRadius:
                "12px",
              background:
                "#22c55e",
              color:
                "white",
              fontWeight:
                "bold",
            }}
          >
            {editingFood
  ? "Update Food"
  : "Save Food"}
          </button>

          <button
            onClick={() => {
  setShowModal(false);

  setEditingFood(null);

  setFoodData({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
}}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )}
</div>


);
}

const inputStyle = {
width: "100%",
padding: "12px",
marginTop: "12px",
borderRadius: "10px",
border: "1px solid #374151",
background: "#1f2937",
color: "white",
boxSizing: "border-box",
};

export default AdminFoods;
