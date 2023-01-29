import { useEffect, useState } from "react";
import CouponCard from "./CouponCard";

export default function Rewards() {
  let reset = false;
  // const [reset, ]
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

  useEffect(() => {
    fetch("https://om-ecoscan-default-rtdb.firebaseio.com/foods.json")
      .then((r) => r.json())
      .then((data) => {
        const dataArr = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            dataArr.push({ ...data[key], id: key });
          }
        }
      });
  }, []);

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
        <div className={`progress_state ${progress1 && !reset && "fill"}`}>
          {progress1 && <span>{eligible[0].ecoscore}</span>}
        </div>
        <div className={`progress_state ${progress2 && !reset && "fill"}`}>
          {progress2 && <span>{eligible[1].ecoscore}</span>}
        </div>
        <div className={`progress_state ${progress3 && !reset && "fill"}`}>
          {progress3 && <span>{eligible[2].ecoscore}</span>}
        </div>
      </div>
      {eligible.length % 3 === 0 &&
        eligible.length >= 3 &&
        res.reward.map((item, i) => {
          return <CouponCard item={item} key={i} reset={reset} />;
        })}
    </div>
  );
}
