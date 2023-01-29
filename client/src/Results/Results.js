import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../Context/Context";

export default function Results() {
  const { product } = useContext(Context);
  const [saved, setSaved] = useState(false);

  const onSave = () => {
    console.log("productFound is true");
    fetch("https://om-ecoscan-default-rtdb.firebaseio.com/foods.json", {
      method: "POST",
      body: JSON.stringify({
        name: product.name,
        image: product.image,
        grade: product.ecoscore,
      }),
    }).then((r) => {
      console.log(r);
      setSaved(true);
    });
  };

  return (
    <div className="results">
      <h1>Results</h1>
      {product.image && <img src={product.image} alt="" />}
      <h3>Name:</h3>
      <p>{product.name}</p>
      <h3>
        Eco Score: <span className="capitalize">{product.ecoscore}</span>
      </h3>
      {product.packaging && (
        <>
          <h3>Disposal Method:</h3>
          <p>{product.packaging}</p>
        </>
      )}
      {product.alternatives && (
        <>
          <h3>Eco-friendly Alternatives:</h3>
          {product.alternatives.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </>
      )}
      <div className="buttons">
        <button onClick={onSave} style={{ marginTop: 10 }} disabled={saved}>
          {saved ? "Saved!" : "Save Result"}
        </button>
        <button>
          <Link to="/rewards" className="white-link">
            View Reward Progress
          </Link>
        </button>
      </div>
    </div>
  );
}
