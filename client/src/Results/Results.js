import { Link } from "react-router-dom";
import camera from "../Assets/house.svg";
import { useContext } from "react";
import { Context } from "../Context/Context";

export default function Results() {
  const { product } = useContext(Context);
  console.log(product);
  const res = {
    foodGrade: "A",
    alternatives: ["sdfsd", "dsofid"],
  };
  return (
    <div className="results">
      <h1>Results</h1>
      <img src={product.image} alt="" />
      <h3>Name:</h3>
      <p>{product.name}</p>
      <h3>
        Food grade: <span className="capitalize">{product.ecoscore}</span>
      </h3>
      <h3>Disposal Method:</h3>
      <h3>Eco-friendly Alternatives:</h3>
      {res.alternatives.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <Link to="/scanner">Back to Scanner</Link>
    </div>
  );
}
