export default function History() {
  const res = {
    pastItems: [
      {
        name: "banana",
        grade: "A",
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg",
      },
      {
        name: "granola bar",
        grade: "A",
        image:
          "https://www.inspiredtaste.net/wp-content/uploads/2022/08/Peanut-Butter-Granola-Bars-3-1200.jpg",
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
              <span>
                <h3>{item.name}</h3>
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
