import {useContext} from "react";
import CouponCard from "./CouponCard";
import {Context} from "../Context/Context";

export default function Rewards() {
  const { pastScans, unwrapped } = useContext(Context);

  let reset = false;
  const reward = [
    {
      coupon: "Walmart - 50% off",
      barcode: "soiofdsfsfds",
    },
  ];

  let eligible = pastScans.filter((p) => {
    return p.grade === "A" || p.grade === "B" || p.grade === "a" || p.grade === "b";
  });
  console.log('eligible', eligible);
  for (const element of eligible) {
    if (element.redeemed !== true) {
      element.redeemed = false;
    }
  }
  eligible = pastScans.filter((p) => {
    return p.redeemed === false;
  });

  const progress1 = unwrapped ? eligible.length > 0 && (
    eligible.length % 1 === 0 ||
    eligible.length % 2 === 0 ||
    eligible.length % 3 === 0) :
    eligible.length > 3 && (
      eligible.length % 1 === 0 ||
      eligible.length % 2 === 0 ||
      eligible.length % 3 === 0)
  const progress2 = progress1 && eligible.length > 1 && (eligible.length % 2 === 1 || eligible.length > 4)
  const progress3 = progress1 && progress2 && eligible.length > 2 && eligible.length % 3 === 0;

  console.log('pastScans', pastScans);

  return (
    <div className="rewards">
      <h1>View your Rewards</h1>
      <div className="progress-bar">
        <div className={`progress_state ${progress1 && !reset && "fill"}`}>
          {progress1 && <span>{eligible[0].grade.toUpperCase()}</span>}
        </div>
        <div className={`progress_state ${progress2 && !reset && "fill"}`}>
          {progress2 && <span>{eligible[1].grade.toUpperCase()}</span>}
        </div>
        <div className={`progress_state ${progress3 && !reset && "fill"}`}>
          {progress3 && <span>{eligible[2].grade.toUpperCase()}</span>}
        </div>
      </div>
      {eligible.length >= 3 &&
        reward.map((item, i) => {
          return <CouponCard item={item} key={i} reset={reset} />;
        })}
      {eligible.length < 3 && <h3 style={{marginInline: 35, textAlign: "center"}}>Scan three items with an ecoscore of A or B for a reward!</h3>}
    </div>
  );
}
