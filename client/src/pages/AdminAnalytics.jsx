import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function AdminAnalytics({ foods }) {
  const categoryMap = {};

  foods.forEach((food) => {
    categoryMap[food.category] =
      (categoryMap[food.category] || 0) + 1;
  });

  const data = Object.keys(categoryMap).map(
    (category) => ({
      category,
      count: categoryMap[category],
    })
  );

  return (
    <div
      style={{
        marginTop: "40px",
        background: "rgba(255,255,255,0.05)",
        padding: "25px",
        borderRadius: "20px",
        border:
          "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        📈 Food Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="category" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#f97316"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AdminAnalytics;