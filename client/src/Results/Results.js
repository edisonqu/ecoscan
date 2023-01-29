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
      <img src={product.image} alt="" />
      <h1>Results</h1>
      <h3>
        Name: <span>{product.name}</span>
      </h3>
      <h3>
        Food grade: <span>{product.ecoscore}</span>
      </h3>
      <h3>Alternatives:</h3>
      {res.alternatives.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <Link to="/scanner">Back to Scanner</Link>
    </div>
  );
}
