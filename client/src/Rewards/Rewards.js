import { useState } from "react";
import CouponCard from "./CouponCard";

export default function Rewards() {
  const res = {
    history: [
      {
        name: "bananas",
        ecoscore: "A",
        image: "adsds",
      },
      {
        name: "bananas",
        ecoscore: "A",
        image: "adsds",
      },
      {
        name: "bananas",
        ecoscore: "C",
        image: "adsds",
      },
      {
        name: "bananas",
        ecoscore: "C",
        image: "adsds",
      },
      {
        name: "pineapple",
        ecoscore: "B",
        image: "adsds",
      },
    ],
    reward: [
      {
        coupon: "Buy 3 Get 1 Off",
        barcode: "soiofdsfsfds",
      },
    ],
  };

  let eligible = res.history.filter((p) => {
    return p.ecoscore === "A" || p.ecoscore === "B";
  });
  for (const element of eligible) {
    if (element.redeemed !== true) {
      element.redeemed = false;
    }
  }
  eligible = res.history.filter((p) => {
    return p.redeemed === false;
  });

  const progress1 =
    eligible.length > 0 &&
    (eligible.length % 3 === 1 ||
      eligible.length % 3 === 2 ||
      eligible.length % 3 === 0);
  const progress2 =
    eligible.length > 1 &&
    (eligible.length % 3 === 2 || eligible.length % 3 === 0);
  const progress3 = eligible.length > 2 && eligible.length % 3 === 0;

  return (
    <div className="rewards">
      <h1>View your Rewards</h1>
      <div className="progress-bar">
        <div className={`progress_state ${progress1 && "fill"}`}>
          {progress1 && <span>{eligible[0].ecoscore}</span>}
        </div>
        <div className={`progress_state ${progress2 && "fill"}`}>
          {progress2 && <span>{eligible[1].ecoscore}</span>}
        </div>
        <div className={`progress_state ${progress3 && "fill"}`}>
          {progress3 && <span>{eligible[2].ecoscore}</span>}
        </div>
      </div>
      {eligible.length % 3 === 0 &&
        eligible.length >= 3 &&
        res.reward.map((item, i) => {
          return <CouponCard item={item} key={i} eligible={eligible} />;
        })}
    </div>
  );
}
