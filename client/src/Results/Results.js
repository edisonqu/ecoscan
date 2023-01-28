import camera from "../Assets/house.svg";

export default function Results() {
  const res = {
    foodGrade: "A",
    alternatives: ["sdfsd", "dsofid"],
  };
  return (
    <div className="results">
      <img src={camera} alt="device camera playback" />
      <h1>Results</h1>
      <h3>Food grade: {res.foodGrade}</h3>
      <h3>Alternatives:</h3>
      {res.alternatives.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </div>
  );
}
