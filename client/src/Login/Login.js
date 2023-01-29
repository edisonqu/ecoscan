import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const username = "jadewei@gmail.com";
  const password = "ecoscan@qhacks";
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
      formik.resetForm();
      if (values.password === password && values.username === username) {
        setTimeout(() => {
          navigate("/scanner")
        }, 400);
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
