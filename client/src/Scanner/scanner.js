import QuaggaScanner from "./Quagga";
import { useState, useContext } from "react";
import { useFormik } from "formik";
import { Form, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import * as Yup from "yup";

export default function Scanner() {
  const [troubleScanning, setTroubleScanning] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setProduct } = useContext(Context);
  const BarcodeSchema = Yup.object().shape({
    id: Yup.number().required("Barcode is required"),
  });
  const formik = useFormik({
    initialValues: {
      id: "",
    },
    validationSchema: BarcodeSchema,
    onSubmit: (values) => {
      formik.resetForm();

      fetch("https://jo-nbhs.onrender.com/product/" + values.id)
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
    },
  });

  return (
    <div className="scanner">
      <h1>Scan Barcode Here</h1>
      <QuaggaScanner />
      <p>
        Please scan the barcode of your food to find out its environmental
        impact.
      </p>
      <button onClick={() => setTroubleScanning(!troubleScanning)}>
        Having issues scanning?
      </button>
      {troubleScanning && (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="id">
            Please enter in the numbers below your barcode:
          </label>
          <input
            type="text"
            name="id"
            placeholder="Numbers below barcode"
            onChange={(e) => {
              formik.handleChange(e);
              setError(null);
            }}
            min="1"
            value={formik.values.id}
          />
          {formik.errors.id && (
            <span className="error">Input must be numbers</span>
          )}
          {error && <span className="error">{error}</span>}

          <button
            type="submit"
            disabled={!formik.values.id || formik.errors.id}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
