import QuaggaScanner from "./Quagga";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function Scanner() {
  const [troubleScanning, setTroubleScanning] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      formik.resetForm();
      navigate("/results");
    },
  });

  return (
    <div className="scanner">
      <h1>Scan Barcode Here</h1>

      <QuaggaScanner />
      <p>
        You will be able to track how bad your food is for the environment smh
      </p>
      <button onClick={() => setTroubleScanning(!troubleScanning)}>
        Having issues scanning?
      </button>
      {console.log(troubleScanning)}
      {troubleScanning && (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="id">
            Please enter in the numbers below your barcode:
          </label>
          <input
            type="text"
            name="id"
            placeholder="Numbers below barcode"
            onChange={formik.handleChange}
            value={formik.values.id}
          />
          <button type="submit" disabled={!formik.values.id}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
