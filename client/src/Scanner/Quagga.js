import React, { useEffect } from "react";
import Quagga from "quagga";
import { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { useNavigate } from "react-router-dom";

export default function QuaggaScanner(props) {
  const { setProduct } = useContext(Context);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    Quagga.init(
      {
        numOfWorkers: 4,
        debug: true,
        locate: true,
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#qr-reader"), // Or '#yourElement' (optional)
        },
        constraints: {
          width: 200,
          height: 100,
          facingMode: "environment",
        },
        decoder: {
          readers: ["upc_reader"],
          debug: {
            drawBoundingBox: true,
            drawScanline: true,
          },
        },
      },
      function (err) {
        if (err) {
          console.log(err);
          return;
        }
        Quagga.start();
      }
    );
    var lastDetection;
    Quagga.onDetected(function (result) {
      var code = result.codeResult.code;
      setError(null);
      console.log(code);
      if (code == null || code === lastDetection) {
        return;
      }
      lastDetection = code;
      fetch("http://localhost:5050/product/" + code)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json.status_verbose !== "product not found") {
            setProduct(json);
            navigate("/results");
          } else {
            setError("Product not found! Please try another");
          }
        });
    });
  }, []);

  return (
    <>
      <div id="quagga-scanner">
        <div id="interactive" className="viewport" />
      </div>
      {<span className="error">{"adasd"}</span>}
      {/* {error && <span className="error">{error}</span>} */}
    </>
  );
}
