export default function History() {
  const res = {
    pastItems: [
      {
        name: "banana",
        grade: "A",
      },
      {
        name: "granola bar",
        grade: "A",
      },
    ],
  };
  return (
    <div className="history">
      <h1>Past Scanned Items</h1>
      {res.pastItems.length > 0 ? (
        res.pastItems.map((item, i) => {
          return (
            <div className="history_card">
              <h3>{item.name}</h3>
              <span>
                <strong>Eco Grade: </strong>
                {item.grade}
              </span>
            </div>
          );
        })
      ) : (
        <h1>No history yet</h1>
      )}
    </div>
  );
}
