import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      formik.resetForm();
      navigate("/scanner");
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
          onChange={formik.handleChange}
          value={formik.values.username}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

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
