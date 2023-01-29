import {useContext} from "react";
import {Context} from "../Context/Context";

export default function History() {
  const { pastScans } = useContext(Context);

  return (
    <div className="history">
      <h1>Past Scanned Items</h1>
      {pastScans.length > 0 ? (
        pastScans.map((item) => {
          return (
            <div className="history_card">
              <span>
                <h3 style={{maxWidth: 140}}>{item.name}</h3>
                <strong>Eco Score: {item.grade}</strong>
              </span>
              <img src={item.image} alt={item.name} />
            </div>
          );
        })
      ) : (
        <h1>No history yet</h1>
      )}
    </div>
  );
}
