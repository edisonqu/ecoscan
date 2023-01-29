import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Context } from "../Context/Context";

export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Context);
  const username = "jade";
  const password = "root";
  const [error, setError] = useState(null);
  const users = [
    {
      username: "jad",
      password: "sdf",
      history: [
        {
          image: "asdad",
          item: "banana",
          ecoscore: "A",
          alternatives: ["asdas", "adsdasd"],
        },
        {
          item: "aadsd",
          image: "asdad",
          ecoscore: "A",
          alternatives: ["asdas", "adsdasd"],
        },
      ],
      rewards: [
        {
          name: "Free Cookie",
          barcode: "oiasdasd",
        },
        {
          name: "Free Drink",
          barcode: "oiasdasd",
        },
      ],
    },
  ];
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
      formik.resetForm();
      if (values.password === password && values.username === username) {
        // setUser("New Value");
        navigate("/scanner");
      } else {
        setError(true);
      }
    },
  });

  return (
    <div className="login nav-padding">
      <h1>Sign in</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => {
            setError(null);
            formik.handleChange(e);
          }}
          value={formik.values.username}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setError(null);
            formik.handleChange(e);
          }}
          value={formik.values.password}
        />

        {error && <span className="error">Wrong username or password</span>}

        <button
          type="submit"
          disabled={!formik.values.password || !formik.values.username}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
