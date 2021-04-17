import "./styles.css";

export default function App() {
  const foodList = {
    dessert: { cheesecake: "4/5", "ice cream": "5/5" },
    drinks: { "virgin mojito": "4/5", "KFC Krusher": "5/5" }
  };
  const items = Object.keys(foodList);
  return (
    <div className="App">
      {items.map((item) => {
        return (
          <span
            key={item}
            style={{
              padding: "0.5rem",
              fontSize: "x-large",
              marginTop: "1rem",
              cursor: "pointer"
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
