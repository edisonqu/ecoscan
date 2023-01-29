import { useState } from "react";

export default function CouponCard({ item, i, eligible }) {
  const [showNFT, setShowNFT] = useState(false);
  const [unwrapped, setUnwrapped] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showButton, setShowButton] = useState(true);

  return (
    <>
      <div
        key={i}
        className={`coupon ${unwrapped && "unwrapped"}`}
        onClick={() => {
          setShowNFT(!showNFT);
          setUnwrapped(false);
          eligible = null;
        }}
      >
        <h3>{unwrapped ? "Tap to claim coupon" : item.coupon}</h3>
      </div>
      {showNFT && (
        <div className="nft" key={i}>
          {showButton && (
            <button
              onClick={() => {
                setShowButton(false);
                setShowLoading(true);
                setTimeout(() => {
                  setShowLoading(false);
                  setShowImage(true);
                }, 3000);
              }}
            >
              Mint Coupon
            </button>
          )}
          {showLoading && <div class="load"></div>}
          {showImage && (
            <img
              src="https://bafkreieutp4youtg42dvdqqgplvg7sycmuolxmm4jecsz7lw65t63j4pfu.ipfs.nftstorage.link/"
              className="hedra"
            />
          )}
        </div>
      )}
    </>
  );
}
