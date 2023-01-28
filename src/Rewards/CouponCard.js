import { useState } from "react";

export default function CouponCard({ item, i }) {
  const [showBarcode, setShowBarcode] = useState(false);
  return (
    <>
      <div
        key={i}
        className="coupon"
        onClick={() => setShowBarcode(!showBarcode)}
      >
        <h3>{item.coupon}</h3>
      </div>
      {showBarcode && (
        <div className="barcode" key={i}>
          {item.barcode}
        </div>
      )}
    </>
  );
}
