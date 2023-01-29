import QuaggaScanner from "./Quagga";
import { useState } from "react";
import { useFormik } from "formik";
import { Form, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Scanner() {
  const [troubleScanning, setTroubleScanning] = useState(false);
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    id: Yup.number().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      id: "",
    },
    validationSchema: { SignupSchema },
    onSubmit: (values) => {
      // if()
      console.log(values);
      formik.resetForm();
      console.log(values);
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
      {troubleScanning && (
        // <Formik>
        // <Form>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="id">
            Please enter in the numbers below your barcode:
          </label>
          <input
            type="text"
            name="id"
            placeholder="Numbers below barcode"
            onChange={formik.handleChange}
            min="1"
            value={formik.values.id}
          />
          <button type="submit" disabled={!formik.values.id}>
            Submit
          </button>
        </form>
        // </Form>
        // </Formik>
      )}
    </div>
  );
}
