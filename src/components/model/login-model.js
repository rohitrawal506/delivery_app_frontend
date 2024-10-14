import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CloseModelButton from "../button/model-close-btn";
import { useAuth } from "src/context/auth-context";

const LoginModel = ({ title, buttonLabel, setLoginModelOpen, setRegisterModelOpen }) => {
  const { login } = useAuth(); 
  
  const handleOutsideClick = (e, close) => {
    if (e.target?.id === "backdrop" || close) {
      setLoginModelOpen(false);
    }
  };

  
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      }),
      onSubmit: async (values) => {
        // localStorage.setItem('userData', JSON.stringify(values));
        login(values)
        // const storedUserData = JSON.parse(localStorage.getItem('userData'));
      // if (storedUserData) {
        //   const { email, password } = storedUserData;
      //   if (email === values.email && password === values.password) {
      //     console.log("Login successful");
          setLoginModelOpen(false);
      //   } else {
      //     console.error("Invalid email or password");
      //   }
      // } else {
      //   console.error("No user data found in localStorage");
      // }
    },
  });

  const handleRegisterClick = () => {
    setLoginModelOpen(false);
    setRegisterModelOpen(true);
  };

  return (
    <>
      <div
        id="backdrop"
        className="fixed inset-0 bg-black opacity-50 z-30"
        onClick={handleOutsideClick}
      />
      <div
        id="drawer-right-example"
        className="fixed top-0 right-96 z-40 h-screen p-6 overflow-y-auto transition-transform duration-1000 ease-in-out translate-x-full bg-white w-96 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-2xl font-semibold text-gray-500 dark:text-gray-400"
        >
          {title}
        </h5>
        <CloseModelButton  onClick={() => setLoginModelOpen(false)}/>
       
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 p-2"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 p-2"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full bg-teal-300 text-white font-semibold py-2 rounded-md hover:bg-teal-600 transition duration-200"
          >
            {buttonLabel}
          </button>
        </form>
          <p className="mt-4 text-center text-teal-300">
            Don't have an account?{" "}
            <button onClick={handleRegisterClick} className="text-blue-500 hover:underline">
              Register
            </button>
          </p>
      </div>
    </>
  );
};

export default LoginModel;
