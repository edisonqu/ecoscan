export default function Rewards() {
  const res = {
    reward: [
      {
        coupon: "Buy 3 Get 1 Off",
        barcode: "soiofdsfsfds",
      },
      {
        coupon: "Free cookie",
        barcode: "soiofdsfsfds",
      },
    ],
  };
  return (
    <div className="rewards">
      <h3>View your Rewards</h3>
      {res.reward.map((item, i) => {
        return (
          <>
            <div
              key={i}
              className="coupon"
              onClick={() => (item.barcodeShowing = !item.barcodeShowing)}
            >
              <h3>{item.coupon}</h3>
            </div>
            {console.log(item.barcodeShowing)}
            <div className="barcode">{item.barcode}</div>
          </>
        );
      })}
    </div>
  );
}
