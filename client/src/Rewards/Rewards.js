import CouponCard from "./CouponCard";

export default function Rewards() {
  const res = {
    history: [
      {
        name: "banans",
      },
    ],
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
      <h1>View your Rewards</h1>
      <div className="progress-bar">
        <div className="progress_state"></div>
        <div className="progress_state"></div>
        <div className="progress_state"></div>
      </div>
      {res.reward.map((item, i) => {
        return <CouponCard item={item} key={i} />;
      })}
    </div>
  );
}
